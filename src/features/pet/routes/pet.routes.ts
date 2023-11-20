import {Router} from "express";
import {adminProtect, authProtect} from "../../../utils/protectRoutes";
import {validateSchema} from "../../../utils/schemaValidation";
import {
  addPet,
  adoptPet,
  editPet,
  getPetByID,
  getPets,
  returnPet,
  savePet,
  unsavePet,
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
pet.post("/:id/adopt", authProtect, adoptPet);
pet.post("/:id/return", authProtect, returnPet);
pet.post("/:id/save", authProtect, savePet);
pet.delete("/:id/save", authProtect, unsavePet);
