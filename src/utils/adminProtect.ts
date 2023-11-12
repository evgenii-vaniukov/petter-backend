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
    console.log(user);
    req.user = user;
    next();
    if (user.role != "admin") {
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
