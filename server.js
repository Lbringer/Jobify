import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

//Local data
import { nanoid } from "nanoid";
let jobs = [
  { id: nanoid(), company: "Human Holdings", position: "SDE" },
  { id: nanoid(), company: "PWC", position: "Cloud Consultant" },
];

//Middleware
if (process.env.NODE_ENV === "development") {
  //Morgan is a logger and dev handles the amt of info u want to see
  app.use(morgan("dev"));
}
app.use(express.json());

//Routes

//Test Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

//Actual Routes
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

//Server listen config
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
