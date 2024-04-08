import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { UnauthenticatedError } from "../errors/customError.js";
import { createJWT } from "../utils/token.js";

export const register = async (req, res) => {
  //First user will be given the role of admin
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: "user created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) {
    throw new UnauthenticatedError("invalid credentials");
  }

  const oneDayInMs = 1000 * 60 * 60 * 24;
  const token = createJWT({ userId: user._id, role: user.role });
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDayInMs),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ message: "user logged in" });
};
