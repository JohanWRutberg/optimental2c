import { PrismaClient, User } from "@prisma/client";
// const prisma = new PrismaClient();
import { prisma } from "./prisma";

export const getUsersByRole = async (): Promise<User[]> => {
  const users = await prisma.user
    .findMany({
      where: {
        role: "USER"
      },
      orderBy: {
        firstName: "asc",
        lastName: "asc"
      }
    })
    .catch((err) => console.error(err));
  console.log("Fetched users:", users);

  await prisma.$disconnect(); // Disconnect from Prisma client after fetching data
  return users;
};
