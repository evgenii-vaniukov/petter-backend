import cors from "cors";
import express from "express";
import morgan from "morgan";
import {login} from "./features/auth/routes/login.routes";
import {signup} from "./features/auth/routes/signup.routes";
import {authProtect} from "./features/auth/utils/auth";

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Test middleware
app.use((req, res, next) => {
  next();
});
app.get("/", (req, res) => {
  res.json({message: "Hi!"});
});

app.get("/protected", authProtect, (req, res) => {
  res.json({message: "Protected!"});
});

app.use("/signup", signup);
app.use("/login", login);

export default app;
