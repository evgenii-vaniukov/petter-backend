import {prisma} from "../../../db";

export async function getUserPets(userID) {
  const userPets = await prisma.user.findUnique({
    where: {
      id: userID,
    },
    include: {
      adoptedPets: true,
    },
  });
  return userPets.adoptedPets;
}
