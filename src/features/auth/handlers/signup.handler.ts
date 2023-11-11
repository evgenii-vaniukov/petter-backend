import crypto from "crypto";
import {createUser} from "../services/auth.service";
import {createJWT} from "../utils/auth";
import {hashPassword} from "../utils/passwords";

export async function createNewUser(req, res) {
  const hashedPassword = await hashPassword(req.body.password);
  const data = {
    id: crypto.randomUUID(),
    email: req.body.email,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    role: "user",
  };

  const user = await createUser(data);

  const token = createJWT(user);
  res.json({token});
}
