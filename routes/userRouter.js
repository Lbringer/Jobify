import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middlewares/validationMiddleWare.js";
import { authorizePermissions } from "../middlewares/authMiddleWare.js";
const router = Router();

router.get("/currentUser", getCurrentUser);
router.get(
  "/admin/applicationStats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch("/updateUser", validateUpdateUserInput, updateUser);

export default router;
