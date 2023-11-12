import {DB} from "../../../db/db";

const petsDB = new DB("pets");

export async function createPet(pet) {
  const data = await petsDB.insertDB(pet);
  return data;
}
