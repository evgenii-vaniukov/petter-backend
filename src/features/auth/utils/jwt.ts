import jwt from "jsonwebtoken";

export function createJWT(user) {
  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY);
  return token;
}
