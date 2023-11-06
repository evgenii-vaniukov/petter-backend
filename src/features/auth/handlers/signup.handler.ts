import crypto from "crypto";
import {createUser} from "../services/auth.service";
import {createJWT, hashPassword} from "../utils/auth";

export async function createNewUser(req, res, next) {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const data = {
      id: crypto.randomUUID(),
      username: req.body.username,
      password: hashedPassword,
    };

    const user = await createUser(data);
    console.log(user);

    const token = createJWT(user);
    res.json({token});
  } catch (e) {
    next(500);
  }
}
