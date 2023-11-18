import crypto from "crypto";
import {
  createRecord,
  editRecordByID,
  getData,
  getRecordByID,
} from "../services/pet.services";

export async function getPets(req, res) {
  const searchParameters = req.query;
  const filteredData = await getData(searchParameters);
  res.json(filteredData);
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
  const id = req.params.id;
  const pet = await getRecordByID(id);
  res.json({pet});
}

export async function editPet(req, res) {
  const id = req.params.id;
  const updatedPetDetails = req.body;
  const updatedPet = await editRecordByID(id, updatedPetDetails);
  res.json(updatedPet);
}

export async function adoptPet(req, res) {
  res.send("TODO");
}
