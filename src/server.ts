import "dotenv/config";
import express from "express";
import morgan from "morgan";
import {signup} from "./features/auth/routes/signup.routes";

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.use("/signup", signup);

export default app;
