import cors from "cors";
import express from "express";
import morgan from "morgan";
import {login} from "./features/auth/routes/login.routes";
import {signup} from "./features/auth/routes/signup.routes";
import {pet} from "./features/pets/routes/pet.routes";
import {user} from "./features/user/routes/user.routes";

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) => {
  res.json({message: "Hi!"});
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/pets", pet);
app.use("/user", user);

export default app;
