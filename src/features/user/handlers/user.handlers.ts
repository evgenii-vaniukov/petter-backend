import {hashPassword} from "../../auth/utils/passwords";
import {
  getUserPets,
  getUserSavedPets,
  updateUser,
} from "../services/user.services";

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

export async function updateUserDetailsHandler(req, res) {
  try {
    const userID = req.user.id;
    const data = req.body;
    const updatedUser = await updateUser(userID, data);
    res.json(updatedUser);
  } catch (error) {
    res.json({error: error.message});
  }
}

export async function updateUserPasswordHandler(req, res) {
  try {
    const userID = req.user.id;
    const data = {password: await hashPassword(req.body.password)};
    const updatedUser = await updateUser(userID, data);
    res.json(updatedUser);
  } catch (error) {
    res.json({error: error.message});
  }
}
