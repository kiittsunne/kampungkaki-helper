const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    admin: { type: Boolean, required: true },
    optIn: { type: Boolean, required: true }, // for emergency jobs
    phoneNumber: { type: Number, required: true },
    neighbourhood: { type: String, required: true },
    skills: { type: Array, required: true },
    resources: { type: Array, required: true },
  },
  { collection: "Users" }
);

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
