import {Router} from "express";
import {createNewUser} from "../handlers/signup.handler";

export const signup = Router();

signup.post("/", createNewUser);
