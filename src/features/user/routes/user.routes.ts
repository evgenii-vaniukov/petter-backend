import {Router} from "express";
import {authProtect} from "../../../utils/protectRoutes";
import {getUserPetsHandler} from "../handlers/user.handlers";
export const user = Router();

user.get("/pets", authProtect, getUserPetsHandler);
