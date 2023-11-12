import {findUser} from "../services/auth.services";

export async function emailIsUnique(req, res, next) {
  const user = await findUser(req.body.email);

  if (user) {
    res.status(409);
    res.json({message: "User with this email already exists"});
    return;
  } else {
    next();
  }
}
