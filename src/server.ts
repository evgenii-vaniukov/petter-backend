import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import {signup} from "./features/auth/routes/signup.routes";

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.json({message: "Hi!"});
});

app.use("/signup", signup);

export default app;
