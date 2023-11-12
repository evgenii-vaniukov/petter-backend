import crypto from "crypto";
import {createPet, getPets} from "../services/pet.services";

export async function getAllPets(req, res) {
  const pets = await getPets();
  res.json(pets);
}

export async function addNewPet(req, res) {
  const data = {
    id: crypto.randomUUID(),
    type: req.body.type,
    name: req.body.name,
    adoptionStatus: req.body.adoptionStatus, // Convert to boolean
    picturePath: req.body.picturePath,
    height: req.body.height,
    weight: req.body.weight,
    color: req.body.color,
    bio: req.body.bio,
    hypoallergenic: req.body.hypoallergenic,
    dietaryRestrictions: req.body.dietaryRestrictions,
    breed: req.body.breed,
  };

  const pet = await createPet(data);
  res.json(pet);
}
