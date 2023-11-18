import crypto from "crypto";
import {createRecord, getData, getRecordByID} from "../services/pet.services";
export async function getAllPets(req, res) {
  const pets = await getData();
  res.json(pets);
}

export async function addPet(req, res) {
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

  const pet = await createRecord(data);
  res.json(pet);
}

export async function getPetByID(req, res) {
  const {id} = req.params;
  const pet = await getRecordByID(id);
  res.json({pet});
}
