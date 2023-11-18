import {Router} from "express";
import {validateSchema} from "../../../utils/schemaValidation";
import {signin} from "../handlers/login.handlers";
import {loginSchema} from "../schemas/loginSchema";

export const login = Router();

login.post("/", [validateSchema(loginSchema)], signin);
