// Models
const CowModel = require("../models/CowModel");

const CowController = {
  getCowByID: (req, res) => {
    try {
      const cowID = req.body.cowID;

      if (!cowID) {
        return res.status(400).json("Invalid cow id");
      }

      const literCowWhite = CowModel.calculateWhiteMilk(cowID); // calculate liter of white cow
      const literCowBrown = CowModel.calculateBrownMilk(cowID); // calculate liter of brown cow
      const literCowPink = CowModel.calculatePinkMilk(cowID); // calculate liter of pink cow

      let errorMessage = ""; // collect error where cow doesn't have ID

      if (literCowWhite === null) {
        errorMessage += "White milk doesn't have this ID. ";
      }
      if (literCowBrown === null) {
        errorMessage += "Brown milk doesn't have this ID. ";
      }
      if (literCowPink === null) {
        errorMessage += "Pink milk doesn't have this ID. ";
      }

      // return error message for display in UI
      if (errorMessage) {
        return res.status(400).json({ status: "error", message: errorMessage.trim() });
      }

      const response = {
        cowLiter: {
          white: literCowWhite,
          brown: literCowBrown,
          pink: literCowPink,
        },
        totalLiter: literCowWhite + literCowBrown + literCowPink,
      };

      return res.status(200).json({ status: "success", message: response });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "An error occurred while processing the request. Please try again later.",
      });
    }
  },
};

module.exports = CowController;
