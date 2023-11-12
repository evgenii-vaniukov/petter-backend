import jwt from "jsonwebtoken";

export function createJWT(user) {
  const token = jwt.sign(
    {id: user.id, role: user.role},
    process.env.JWT_SECRET_KEY
  );
  return token;
}
