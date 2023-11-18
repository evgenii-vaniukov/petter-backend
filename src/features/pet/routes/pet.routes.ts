import {Router} from "express";
import {adminProtect} from "../../../utils/adminProtect";
import {validateSchema} from "../../../utils/schemaValidation";
import {
  addPet,
  adoptPet,
  editPet,
  getPetByID,
  getPets,
} from "../handlers/pet.handlers";
import {
  patchPetSchema,
  postPetSchema,
  searchPetSchema,
} from "../schemas/petSchemas";
export const pet = Router();

pet.get("/", validateSchema(searchPetSchema), getPets);
pet.get("/:id", getPetByID);

pet.patch("/:id", [validateSchema(patchPetSchema), adminProtect], editPet);

pet.post("/", [validateSchema(postPetSchema), adminProtect], addPet);

pet.post("/:id/adopt", adoptPet);
