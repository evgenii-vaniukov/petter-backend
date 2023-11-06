import {DB} from "../../../db/db";

const usersDB = new DB("users");

export async function createUser(user) {
  const data = await usersDB.insertDB(user);
  return data;
}
