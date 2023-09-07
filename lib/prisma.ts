import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
  interface Global {
    prisma: PrismaClient;
  }
}

if (process.env.NODE_ENV === 'production') {
  global.prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

const prisma = global.prisma;

export default prisma;
