import {Router} from "express";
import {createNewUser} from "../handlers/signup.handler";
import {passwordsMatch} from "../utils/passwords";

export const signup = Router();

signup.post("/", passwordsMatch, createNewUser);
