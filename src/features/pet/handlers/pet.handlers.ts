import crypto from "crypto";
import {
  createRecord,
  editRecordByID,
  getData,
  getRecordByID,
} from "../services/pet.services";
import {
  convertToBoolean,
  convertToDieataryRestrictions,
  convertToPetType,
} from "../utils/typeConverters";

export async function getPets(req, res) {
  const searchParameters = req.query;

  for (let key in searchParameters) {
    if (key === "hypoallergenic") {
      searchParameters[key] = convertToBoolean(searchParameters[key]);
    } else if (key === "dietaryRestrictions") {
      searchParameters[key] = convertToDieataryRestrictions(
        searchParameters[key]
      );
    } else if (key === "type") {
      searchParameters[key] = convertToPetType(searchParameters[key]);
    } else if (key === "adoptionStatus") {
      searchParameters[key] = convertToBoolean(searchParameters[key]);
    } else if (key === "name") {
      searchParameters[key] = searchParameters[key].toLowerCase();
    } else if (key === "color") {
      searchParameters[key] = searchParameters[key].toLowerCase();
    } else if (key === "breed") {
      searchParameters[key] = searchParameters[key].toLowerCase();
    } else if (key === "height") {
      searchParameters[key] = +searchParameters[key];
    } else if (key === "weight") {
      searchParameters[key] = +searchParameters[key];
    } else if (key === "bio") {
      searchParameters[key] = searchParameters[key].toLowerCase();
    } else if (key === "picturePath") {
      searchParameters[key] = searchParameters[key].toLowerCase();
    } else {
      delete searchParameters[key];
    }
  }

  const filteredData = await getData(searchParameters);
  res.json(filteredData);
}

export async function addPet(req, res) {
  // TODO: Check that input is non empty
  const data = {
    id: crypto.randomUUID(),
    type: convertToPetType(req.body.type), // Check that type is valid
    name: req.body.name.toLowerCase(),
    adoptionStatus: convertToBoolean(req.body.adoptionStatus), // Convert to boolean
    picturePath: req.body.picturePath, // Check if URL
    height: +req.body.height,
    weight: +req.body.weight,
    color: req.body.color.toLowerCase(),
    bio: req.body.bio.toLowerCase(),
    hypoallergenic: convertToBoolean(req.body.hypoallergenic),
    dietaryRestrictions: convertToDieataryRestrictions(
      // Check that type is valid
      req.body.dietaryRestrictions
    ),
    breed: req.body.breed.toLowerCase(),
  };

  const pet = await createRecord(data);
  res.send("Successfully Added");
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
