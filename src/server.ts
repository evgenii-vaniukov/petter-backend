import express from "express";
import {signup} from "./features/auth/routes/signup.routes";

const app = express();

app.use("/signup", signup);

export default app;
