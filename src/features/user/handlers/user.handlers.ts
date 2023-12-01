import {getUserPets, getUserSavedPets} from "../services/user.services";

export async function getUserPetsHandler(req, res) {
  try {
    const userID = req.user.id;
    const userPets = await getUserPets(userID);
    res.json(userPets);
  } catch (error) {
    console.error(error);
    res.status(400).json({error: "Invalid request"});
  }
}

export async function getUserSavedPetsHandler(req, res) {
  try {
    const userID = req.user.id;
    const userSavedPets = await getUserSavedPets(userID);
    res.json(userSavedPets);
  } catch (error) {
    console.error(error);
    res.status(400).json({error: "Invalid request"});
  }
}
