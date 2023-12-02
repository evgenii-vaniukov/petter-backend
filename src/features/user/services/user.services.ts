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

// I need to join pet table  with saved pets table
export async function getUserSavedPets(userID) {
  const userSavedPets = await prisma.user.findUnique({
    where: {
      id: userID,
    },
    include: {
      savedPets: {
        include: {
          pet: true,
        },
      },
    },
  });
  return userSavedPets.savedPets.map((savedPet) => savedPet.pet);
}

export async function updateUser(userID, data) {
  const updatedUser = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      ...data,
    },
  });
  return updatedUser;
}
