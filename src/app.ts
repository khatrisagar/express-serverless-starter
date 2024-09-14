import express, { Application } from "express";
const app: Application = express();

app.get("/", (req, res) => {
  res.json("hello world");
});

export default app;
