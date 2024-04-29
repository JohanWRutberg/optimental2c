import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const getUsersByRole = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    where: {
      role: "USER"
    }
    // orderBy: {
    //   firstName: "asc",
    //   lastName: "asc"
    // }
  });
  //   console.log("Fetched users:", users);

  await prisma.$disconnect(); // Disconnect from Prisma client after fetching data
  return users;
};
