import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";

//Router
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//Middleware import
import morgan from "morgan";
import errHandlerMiddleWare from "./middlewares/errHandlerMiddleWare.js";
import { authenticateUser } from "./middlewares/authMiddleWare.js";
import cookieParser from "cookie-parser";

//Middleware
if (process.env.NODE_ENV === "development") {
  //Morgan is a logger and dev handles the amt of info u want to see
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cookieParser());

//Test Route
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "test route" });
});

// Routes
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

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
