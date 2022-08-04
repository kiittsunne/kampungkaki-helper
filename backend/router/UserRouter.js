// Document set-up
require("dotenv").config();
const express = require("express");
const router = express.Router();

// Import Authentication & Authorization utils
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");

// Import model
const User = require("../models/User");
// Import model
const Job = require("../models/Job");

// ====================== Routes ====================== //

// get all users
router.get("/users", async (req, res) => {
  try {
    // const allUsers = await User.find();
    res.send("");
  } catch (err) {
    res.send({ status: err.status, message: err.message });
  }
});

// get user by id
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select(
      "_id username email"
    );
    res.send(user);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// accepts user name + password from client, salts password, saves new user to db
router.put("/signup", async (req, res) => {
  const user = await User.findOne({ email: { $eq: req.body.email } });
  if (user)
    return res.send({
      status: 409,
      message: "Email is linked to existing account.",
    });
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // ,10 or ,salt both ok

    // store to db
    const createdUser = new User({
      username: req.body.username,
      hash: hashedPassword,
      email: req.body.email,
    });
    await createdUser.save();
    res.status(201).send({ status: 201, message: "User created" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
});

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
