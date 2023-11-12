import {Router} from "express";
import {adminProtect} from "../../../utils/adminProtect";
import {addNewPet} from "../handlers/pet.handlers";

export const pet = Router();

pet.get("/", (req, res) => {
  res.send("GET Pet Success");
});

pet.get("/:id", (req, res) => {
  res.send("GET Pet by ID Success");
});

pet.post("/", adminProtect, addNewPet);
