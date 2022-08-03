require("dotenv").config();
const mongoose = require("mongoose");

let URI = "mongodb://127.0.0.1:27017/ansar";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

module.exports = connectDB;
g;
