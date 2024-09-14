// External Dependencies
const express = require("express");

// Controllers
const CowController = require("../controllers/CowController");

const router = express.Router();

router.post("/cows", CowController.getCowByID);

module.exports = router;
