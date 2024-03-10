//Local data
import { nanoid } from "nanoid";
let jobs = [
  { id: nanoid(), company: "Human Holdings", position: "SDE" },
  { id: nanoid(), company: "PWC", position: "Cloud Consultant" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "Please provide company and position" });
  }
  const id = nanoid();
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with ${id}` });
  }
  res.status(200).json({ job });
};
export const updateJob = (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "Please provide company and position" });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with ${id}` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ message: "Job modified ", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with ${id}` });
  }
  let newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ message: "Job deleted" });
};
