const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    dateTime: { type: String, required: true },
    neighbourhood: { type: String, required: true },
    kakiName: { type: String, required: true },
    kakiAddress: { type: String, required: true },
    kakiPhone: { type: Number, required: true },
    description: { type: String, required: true },
    priority: { type: Boolean, required: true },
    pax: { type: Number, required: true },
    specialRequirements: { type: String, required: true },
    volunteer: { type: Array, required: true },
    duration: { type: Number, required: true },
    email: { Type: String, required: true },
  },
  { collection: "Users" }
);

const Users = mongoose.model("Users", JobsSchema);
module.exports = Users;
