import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";

//Router
import jobRouter from "./routes/jobRouter.js";

//Middleware import
import morgan from "morgan";
import errHandlerMiddleWare from "./middlewares/errHandlerMiddleWare.js";

//Middleware
if (process.env.NODE_ENV === "development") {
  //Morgan is a logger and dev handles the amt of info u want to see
  app.use(morgan("dev"));
}
app.use(express.json());

// Routes
app.use("/api/v1/jobs", jobRouter);

//Not found middle ware
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

//Server error middleware (has to be last)
app.use(errHandlerMiddleWare);

//Server listen and db connect config
const PORT = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
