import {DB} from "../../../db/db";

const petsDB = new DB("pets");

export async function getData(searchParameters) {
  const data = await petsDB.getDB();
  if (Object.keys(searchParameters).length === 0) {
    return data;
  }

  const filteredData = data.filter((pet) =>
    Object.keys(searchParameters).every(
      (key) => pet[key] === searchParameters[key]
    )
  );

  return filteredData;
}

export async function createRecord(pet) {
  const data = await petsDB.insertDB(pet);
  return data;
}

export async function getRecordByID(id) {
  const data = await petsDB.getDB();
  const fileterdData = data.filter((pet) => pet.id === id);
  return fileterdData;
}

export async function editRecordByID(id, updatedRecord) {
  const data = await petsDB.getDB();
  const index = data.findIndex((pet) => pet.id === id);
  if (index === -1) {
    return null;
  }
  let record = data.filter((pet) => pet.id === id)[0];
  record = {...record, ...updatedRecord};
  data[index] = record;
  const db = await petsDB.saveDB(data);
  return record;
}
