FROM node:20-alpine AS base
WORKDIR /app

RUN apk add --no-cache openssl

COPY apps/backend/package.json ./package.json
RUN npm install

COPY apps/backend/. ./
COPY prisma /prisma
COPY apps/backend/package.json /prisma/package.json

RUN npx prisma generate --schema /prisma/schema.prisma
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]
