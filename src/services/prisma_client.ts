import { PrismaClient } from "@prisma/client";
let prisma_client = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  });

if ( process.env.NODE_ENV === "dev") {
   prisma_client.$on("query", (e:any) => {
    // if (e.duration > 150) {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
    // }
  });
}


export const prismaWrite = new PrismaClient();
export const prismaRead = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});
export { prisma_client };