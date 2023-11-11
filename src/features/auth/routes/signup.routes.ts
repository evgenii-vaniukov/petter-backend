import {Router} from "express";
import {createNewUser} from "../handlers/signup.handler";
import {emailIsUnique} from "../utils/email";
import {passwordsMatch} from "../utils/passwords";

export const signup = Router();

signup.post("/", emailIsUnique, passwordsMatch, createNewUser);
