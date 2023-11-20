import crypto from "crypto";
import {
  addRecordToUser,
  createRecord,
  editRecordByID,
  getData,
  getRecordByID,
} from "../services/pet.services";
import {formatPetData} from "../utils/inputFormater";

export async function getPets(req, res) {
  const searchParameters = formatPetData(req.query);

  const filteredData = await getData(searchParameters);
  res.json(filteredData);
}

export async function addPet(req, res) {
  // TODO: Check that inputs are non empty
  const data = {
    id: crypto.randomUUID(),
    type: req.body.type, // Check that type is valid
    name: req.body.name,
    adoptionStatus: req.body.adoptionStatus, // Convert to boolean
    picturePath: req.body.picturePath, // Check if URL
    height: req.body.height,
    weight: req.body.weight,
    color: req.body.color,
    bio: req.body.bio,
    hypoallergenic: req.body.hypoallergenic,
    dietaryRestrictions: req.body.dietaryRestrictions, // Check that type is valid
    breed: req.body.breed,
  };
  const formatedData = formatPetData(data);
  console.log(formatedData);

  const pet = await createRecord(formatedData);
  res.send("Successfully Added");
}

export async function getPetByID(req, res) {
  const petID = req.params.id;
  const pet = await getRecordByID(petID);
  res.json(pet);
}

export async function editPet(req, res) {
  const id = req.params.id;
  const updatedPetDetails = formatPetData(req.body);
  const updatedPet = await editRecordByID(id, updatedPetDetails);
  res.json(updatedPet);
}

export async function adoptPet(req, res) {
  const petID = req.params.id;
  const pet = await getRecordByID(petID);
  const updatedPetDetails = formatPetData({
    adoptionStatus: "true",
  });

  const updatedPet = await editRecordByID(petID, updatedPetDetails);

  const userID = req.user.id;
  await addRecordToUser(userID, petID);

  res.send("Sucessfully Adopted");
}
