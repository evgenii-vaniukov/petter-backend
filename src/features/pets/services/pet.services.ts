import {prisma} from "../../../db";

export async function getData(searchParameters) {
  if (Object.keys(searchParameters).length === 0) {
    const data = await prisma.pet.findMany();
    return data;
  }

  const fileterdData = await prisma.pet.findMany({
    where: searchParameters,
  });
  return fileterdData;
}

export async function createRecord(pet) {
  const data = await prisma.pet.create({
    data: pet,
  });
  return data;
}

export async function getRecordByID(id) {
  const fileterdData = await prisma.pet.findMany({
    where: {
      id: id,
    },
  });

  if (fileterdData.length === 0) {
    return null;
  }

  return fileterdData[0];
}

export async function editRecordByID(id, updatedRecord) {
  const updatedPet = await prisma.pet.update({
    where: {
      id: id,
    },
    data: updatedRecord,
  });
  return updatedPet;
}

export async function deleteRecordByID(id) {
  const deletedPet = await prisma.pet.delete({
    where: {
      id: id,
    },
  });
  return deletedPet;
}

export async function addRecordToUser(userID, recordID) {
  const updatedUser = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      adoptedPets: {
        connect: {
          id: recordID,
        },
      },
    },
  });
  return updatedUser;
}

export async function removeRecordFromUser(userID, recordID) {
  const updatedUser = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      adoptedPets: {
        disconnect: {
          id: recordID,
        },
      },
    },
  });
  return updatedUser;
}

export async function saveRecordtoUser(userID, recordID) {
  const savePet = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      savedPets: {
        create: {
          petId: recordID,
        },
      },
    },
  });
  return savePet;
}

export async function removeRecordFromSaved(userID, recordID) {
  const savePet = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      savedPets: {
        delete: {
          userId_petId: {
            userId: userID,
            petId: recordID,
          },
        },
      },
    },
  });
  return savePet;
}
