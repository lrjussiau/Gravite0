import { PrismaClient } from '@prisma/client';

declare global {
  // Allow global `var` declaration
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    // Uncomment the following line to enable query logging in development
    // log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
