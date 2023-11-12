import {Router} from "express";
import {adminProtect} from "../../../utils/adminProtect";
import {validateSchema} from "../../../utils/schemaValidation";
import {addNewPet} from "../handlers/pet.handlers";
import {petSchema} from "../schemas/petSchema";

export const pet = Router();

pet.get("/", (req, res) => {
  res.send("GET Pet Success");
});

pet.get("/:id", (req, res) => {
  res.send("GET Pet by ID Success");
});

pet.post("/", [validateSchema(petSchema), adminProtect], addNewPet);
