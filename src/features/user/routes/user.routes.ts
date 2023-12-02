import {Router} from "express";
import {authProtect} from "../../../utils/protectRoutes";
import {
  getUserPetsHandler,
  getUserSavedPetsHandler,
  updateUserDetailsHandler,
  updateUserPasswordHandler,
} from "../handlers/user.handlers";

import {passwordsMatch} from "../../auth/utils/passwords";

export const user = Router();

user.get("/pets", authProtect, getUserPetsHandler);
user.get("/pets/saved", authProtect, getUserSavedPetsHandler);
user.put("/details", authProtect, updateUserDetailsHandler);
user.put("/password", [authProtect, passwordsMatch], updateUserPasswordHandler);
