require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5002;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDB = require("../backend/db/db");

connectDB();

app.listen(PORT, () => {
  console.log(`App is tuned in to ${PORT}`);
});
