import {Router} from "express";

export const signup = Router();

signup.get("/", (req, res) => {
  res.send("Hi!");
});
