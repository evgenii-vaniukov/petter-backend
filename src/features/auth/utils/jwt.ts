import jwt from "jsonwebtoken";

export function createJWT(user) {
  const token = jwt.sign({id: user.id, username: user.username});
}
