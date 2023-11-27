import jwt from "jsonwebtoken";

export function createJWT(user) {
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      name: user.firstName,
      email: user.email,
      lastName: user.lastName,
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
}
