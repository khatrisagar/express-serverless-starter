import express, { Application } from "express";
const app: Application = express();

import { config } from "dotenv";
config();

app.get("/", (req, res) => {
  res.json("hello world");
});
app.get("/auth", (req, res) => {
  res.json(`authh ${process.env.TOKEN}`);
});

export default app;
