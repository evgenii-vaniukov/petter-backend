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

  return fileterdData;
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
