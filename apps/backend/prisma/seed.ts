import { PrismaClient, Role, EmploymentType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('ChangeMe123!', 12);

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      passwordHash: hash,
      firstName: 'System',
      lastName: 'Admin',
      role: Role.ADMIN,
      employmentType: EmploymentType.FULL_TIME,
    },
  });

  await prisma.appSetting.upsert({
    where: { key: 'defaultLanguage' },
    update: { value: 'hr' },
    create: { key: 'defaultLanguage', value: 'hr' },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
