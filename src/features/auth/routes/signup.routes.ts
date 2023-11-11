import {Router} from "express";
import {createNewUser} from "../handlers/signup.handler";
import {emailIsUnique} from "../utils/email";
import {passwordsMatch} from "../utils/passwords";
import {validateUserData} from "../utils/userDataValidation";

export const signup = Router();

signup.post(
  "/",
  [validateUserData, passwordsMatch, emailIsUnique],
  createNewUser
);
