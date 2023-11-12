import {Router} from "express";
import {validateSchema} from "../../../utils/schemaValidation";
import {createNewUser} from "../handlers/signup.handlers";
import {signupSchema} from "../schemas/signupSchema";
import {emailIsUnique} from "../utils/email";
import {passwordsMatch} from "../utils/passwords";

export const signup = Router();

signup.post(
  "/",
  [validateSchema(signupSchema), passwordsMatch, emailIsUnique],
  createNewUser
);
