import {Router} from "express";
import {adminProtect} from "../../../utils/adminProtect";
import {validateSchema} from "../../../utils/schemaValidation";
import {addPet, editPet, getPetByID, getPets} from "../handlers/pet.handlers";
import {patchPetSchema, postPetSchema} from "../schemas/petSchemas";
export const pet = Router();

pet.get("/", getPets);
pet.get("/:id", getPetByID);

pet.patch("/:id", [validateSchema(patchPetSchema), adminProtect], editPet);

pet.post("/", [validateSchema(postPetSchema), adminProtect], addPet);
