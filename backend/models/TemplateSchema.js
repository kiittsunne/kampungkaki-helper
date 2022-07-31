const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema(
  {
    x: { type: String },
    y: { type: String },
    z: { type: Array },
  },
  { collection: "new" }
);

const New = mongoose.model("New", NewSchema);
module.exports = New;
