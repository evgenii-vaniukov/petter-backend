import {Router} from "express";
import {signin} from "../handlers/login.handler";

export const login = Router();

login.get("/", signin);
