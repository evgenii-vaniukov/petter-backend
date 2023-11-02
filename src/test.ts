import fs from "node:fs/promises";

async function readPjson() {
  const pjsonPath = "../package.json";
  const pjson = await fs.readFile(pjsonPath, "utf-8");
  const json = JSON.parse(pjson);

  return json;
}
