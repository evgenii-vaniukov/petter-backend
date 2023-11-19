import {createUser} from "../services/auth.services";
import {createJWT} from "../utils/jwt";
import {hashPassword} from "../utils/passwords";

export async function createNewUser(req, res) {
  const hashedPassword = await hashPassword(req.body.password);
  const data = {
    email: req.body.email,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
  };

  const user = await createUser(data);

  const token = createJWT(user);
  res.json({token});
}
