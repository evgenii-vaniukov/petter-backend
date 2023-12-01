import {Router} from "express";
import {authProtect} from "../../../utils/protectRoutes";
import {
  getUserPetsHandler,
  getUserSavedPetsHandler,
} from "../handlers/user.handlers";
export const user = Router();

user.get("/pets", authProtect, getUserPetsHandler);
user.get("/pets/saved", authProtect, getUserSavedPetsHandler);
