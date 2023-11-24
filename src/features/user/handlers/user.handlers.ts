import {getUserPets} from "../services/user.services";

export async function getUserPetsHandler(req, res) {
  const userID = req.user.id;
  const userPets = await getUserPets(userID);
  res.json(userPets);
}
