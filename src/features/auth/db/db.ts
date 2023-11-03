import crypto from "node:crypto";
import fs from "node:fs/promises";

export class UsersDB {
  DB_PATH: string;

  constructor() {
    this.DB_PATH = `./users.db.json`;
  }

  getDB = async () => {
    const content = await fs.readFile(this.DB_PATH, "utf-8");
    const json = JSON.parse(content);
    return json;
  };

  saveDB = async (db) => {
    await fs.writeFile(this.DB_PATH, JSON.stringify(db, null, 2));
    return db;
  };

  insertDB = async (data) => {
    const db = await this.getDB();
    const id = crypto.randomUUID();
    db.push({
      id,
      ...data,
    });
    await this.saveDB(db);
    return data;
  };
}
