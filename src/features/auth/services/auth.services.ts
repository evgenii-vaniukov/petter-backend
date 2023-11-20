import {prisma} from "../../../db";

export async function createUser(user) {
  const data = await prisma.user.create({
    data: user,
  });
  return data;
}

export async function findUser(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}
