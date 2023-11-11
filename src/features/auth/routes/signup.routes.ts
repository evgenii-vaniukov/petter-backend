import {Router} from "express";
import {createNewUser} from "../handlers/signup.handler";
import {schema} from "../schemas/signup";
import {validateSchema} from "../utils//schemaValidation";
import {emailIsUnique} from "../utils/email";
import {passwordsMatch} from "../utils/passwords";

export const signup = Router();

signup.post(
  "/",
  [validateSchema(schema), passwordsMatch, emailIsUnique],
  createNewUser
);
