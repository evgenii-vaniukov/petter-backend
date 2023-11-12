import {DB} from "../../../db/db";

const usersDB = new DB("users");

export async function createUser(user) {
  const data = await usersDB.insertDB(user);
  return data;
}

export async function findUser(email) {
  const db = await usersDB.getDB();
  const user = db.find((user) => user["email"] == email);
  return user;
}