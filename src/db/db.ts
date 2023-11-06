import crypto from "node:crypto";
import fs from "node:fs/promises";

export class DB {
  DB_PATH: string;

  DB_NAME: string;

  constructor(dbName) {
    this.DB_PATH = `${__dirname}/${dbName}.db.json`;
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
