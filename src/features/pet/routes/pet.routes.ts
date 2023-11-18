import {Router} from "express";
import {adminProtect} from "../../../utils/adminProtect";
import {validateSchema} from "../../../utils/schemaValidation";
import {addPet, getAllPets, getPetByID} from "../handlers/pet.handlers";
import {petSchema} from "../schemas/petSchema";
export const pet = Router();

pet.get("/", getAllPets);

pet.get("/:id", getPetByID);

pet.post("/", [validateSchema(petSchema), adminProtect], addPet);
