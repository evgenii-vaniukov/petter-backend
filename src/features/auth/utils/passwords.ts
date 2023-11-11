import bcrypt from "bcrypt";

export function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export function hashPassword(password) {
  return bcrypt.hash(password, +process.env.SALT_ROUNDS);
}

export function passwordsMatch(req, res, next) {
  const passwordIsValid = req.body.password === req.body.passwordMatch;

  if (!passwordIsValid) {
    res.status(401);
    res.json({message: "Passwords do not match"});
    return;
  } else {
    next();
  }
  return passwordIsValid;
}
