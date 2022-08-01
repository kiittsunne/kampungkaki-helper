const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String },
    hash: { type: String },
    email: { type: String, unique: true },
  },
  { collection: "Users" }
);

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
