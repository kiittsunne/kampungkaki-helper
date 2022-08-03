// Document set-up
require("dotenv").config();
const express = require("express");
const router = express.Router();

// Import Authentication & Authorization utils
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");

// Import model
const Jobs = require("../models/Job");

//////////// create job
router.put("/createjob", async (req, res) => {
  try {
    // store to db
    const createdJob = new Job({
      title: req.body.title,
      dateTime: req.body.dateTime,
      neighbourhood: req.body.neighbourhood,
      kakiName: req.body.kakiName,
      kakiAddress: req.body.kakiAddress,
      kakiPhone: req.body.kakiPhone,
      description: req.body.description,
      priority: req.body.priority,
      pax: req.body.pax,
      specialRequirements: req.body.specialRequirements,
      volunteer: req.body.volunteer,
      duration: req.body.duration,
    });
    await createdJob.save();
    res.status(201).send({ status: 201, message: "User created" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
});

///////////// display a job
router.post("/jobs/:id", async (req, res) => {
  try {
    const singleJob = await Job.findOne({ _id: req.params.id });
    res.json(singleJob);
  } catch (error) {
    console.log("POST/ jobs", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
});

///////////// display all job
router.post("/jobs", async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json(allJobs);
  } catch (error) {
    console.log("POST/ jobs", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
});

module.exports = router;
