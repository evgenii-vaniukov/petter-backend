import {DB} from "../../../db/db";

const petsDB = new DB("pets");

export async function getData() {
  const data = await petsDB.getDB();
  return data;
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
