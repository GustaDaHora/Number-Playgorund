declare global {
  namespace NodeJS {
    interface Global {
      prisma: import('@prisma/client').PrismaClient;
    }
  }
}
