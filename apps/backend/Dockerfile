FROM node:20-alpine AS base
WORKDIR /app

COPY apps/backend/package.json ./package.json
RUN npm install

COPY apps/backend/. ./
COPY prisma /prisma

RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]
