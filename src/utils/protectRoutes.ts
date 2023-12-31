import jwt from "jsonwebtoken";

export function adminProtect(req, res, next) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not Authorized");
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.send("Not Authorized");
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
    if (user.role != "ADMIN") {
      res.status(401);
      res.send("Not Authorized");
      return;
    }
  } catch (e) {
    res.status(401);
    res.send("Token is not valid");
    return;
  }
}

export function authProtect(req, res, next) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not Authorized");
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.send("Not Authorized");
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    res.send("Token is not valid");
    return;
  }
}
