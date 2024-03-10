import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;

//Pattern:
//Get all jobs
// app.get("/api/v1/jobs");

//Create job
// app.post("/api/v1/jobs");

//Get Single Job
// app.get("/api/v1/jobs/:id");

// Edit Job
// app.patch("/api/v1/jobs/:id");

// Delete Job
// app.delete("/api/v1/jobs/:id");
