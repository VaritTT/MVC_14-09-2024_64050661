// env
require("dotenv").config();

// External Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const api = require("./src/routes/api");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // for handling JSON data eg. req.body

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// API Route
app.use("/", api);

const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
