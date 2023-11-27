import crypto from "crypto";
import {
  addRecordToUser,
  createRecord,
  editRecordByID,
  getData,
  getRecordByID,
  removeRecordFromSaved,
  removeRecordFromUser,
  saveRecordtoUser,
} from "../services/pet.services";
import {formatPetData} from "../utils/inputFormater";

export async function getPets(req, res) {
  const searchParameters = formatPetData(req.query);

  for (const key in searchParameters) {
    if (Array.isArray(searchParameters[key])) {
      searchParameters[key] = {
        in: searchParameters[key],
      };
    }
  }

  const filteredData = await getData(searchParameters);
  res.json(filteredData);
}
/// !!!!!! put everything inside try catch
export async function addPet(req, res) {
  // TODO: Check that inputs are non empty
  try {
    const data = {
      id: crypto.randomUUID(),
      type: req.body.type, // Check that type is valid
      name: req.body.name,
      adoptionStatus: req.body.adoptionStatus, // Convert to boolean
      picturePath: req.body.picturePath, // Check if URL
      size: req.body.size,
      color: req.body.color,
      bio: req.body.bio,
      hypoallergenic: req.body.hypoallergenic,
      dietaryRestrictions: req.body.dietaryRestrictions, // Check that type is valid
      breed: req.body.breed,
    };
    const formatedData = formatPetData(data);

    const pet = await createRecord(formatedData);
    res.json({mesasge: "Successfully Added"});
  } catch (error) {
    res.status(400);
    res.json({error: error.message});
  }
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

  const updatedPetDetails = formatPetData({
    adoptionStatus: "true",
  });

  const updatedPet = await editRecordByID(petID, updatedPetDetails);

  const userID = req.user.id;
  const updatedUser = await addRecordToUser(userID, petID);
  res.send("Sucessfully Adopted");
}

export async function returnPet(req, res) {
  const petID = req.params.id;
  const updatedPetDetails = formatPetData({
    adoptionStatus: "false",
  });

  const updatedPet = await editRecordByID(petID, updatedPetDetails);

  const userID = req.user.id;
  const updatedUser = await removeRecordFromUser(userID, petID);

  res.send("Sucessfully Returned");
}

export async function savePet(req, res) {
  const petID = req.params.id;
  const userID = req.user.id;
  const updatedUser = await saveRecordtoUser(userID, petID);
  res.send("Sucessfully Saved");
}

export async function unsavePet(req, res) {
  const petID = req.params.id;
  const userID = req.user.id;
  const updatedUser = await removeRecordFromSaved(userID, petID);
  res.send("Sucessfully Unsaved");
}
