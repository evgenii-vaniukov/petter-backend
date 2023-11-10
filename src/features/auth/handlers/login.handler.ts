import {findUser} from "../services/auth.service";
import {comparePasswords, createJWT} from "../utils/auth";

export async function signin(req, res) {
  const user = await findUser(req.body.username);

  const passwordIsValid = comparePasswords(req.body.password, user.password);

  if (!passwordIsValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }
  const token = createJWT(user);
  res.json(token);
}
