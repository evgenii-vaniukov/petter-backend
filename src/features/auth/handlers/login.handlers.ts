import {findUser} from "../services/auth.services";
import {createJWT} from "../utils/jwt";
import {comparePasswords} from "../utils/passwords";

export async function signin(req, res) {
  const user = await findUser(req.body.email);

  if (!user) {
    res.status(401);
    res.send("User is not found");
    return;
  }

  const passwordIsValid = await comparePasswords(
    req.body.password,
    user.password
  );

  if (!passwordIsValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }
  const token = createJWT(user);
  res.json({
    token,
    role: user.role,
    name: user.firstName,
    email: user.email,
    lastName: user.lastName,
  });
}
