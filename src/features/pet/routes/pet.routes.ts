import {Router} from "express";

export const pet = Router();

pet.get("/", (req, res) => {
  res.send("GET Pet Success");
});
