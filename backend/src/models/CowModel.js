// External Dependencies
const fs = require("fs");
const path = require("path");

// Path to the JSON file
const filePath = path.join(__dirname, "../cows.json");

const CowModel = {
  calculateWhiteMilk: (id) => {
    // Check if the JSON file exists, create it if it doesn't
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // Write JSON file to filePath with stringify (JSON to string)
    }

    const data = fs.readFileSync(filePath); // Read JSON file
    const cowObjList = JSON.parse(data); // parse to JSON format file

    // Find the cow with ID and white color
    const cowWhiteByID = cowObjList.find((cow) => {
      return cow.id === id && cow.color === "white";
    });

    // Return null if the white cow is not found
    if (!cowWhiteByID) {
      return null;
    }

    // Calculate milk liters for white cow based on age
    const liter = 120 - (cowWhiteByID.age.year * 12 + cowWhiteByID.age.month);
    return liter;
  },

  calculateBrownMilk: (id) => {
    // Check if the JSON file exists, create it if it doesn't
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // Write JSON file to filePath with stringify (JSON to string)
    }

    const data = fs.readFileSync(filePath); // Read JSON file
    const cowObjList = JSON.parse(data); // parse to JSON format file

    // Find the cow with ID and brown color
    const cowBrownByID = cowObjList.find((cow) => {
      return cow.id === id && cow.color === "brown";
    });

    // Return null if the brown cow is not found
    if (!cowBrownByID) {
      return null;
    }

    // Calculate milk liters for brown cow based on age
    const liter = 40 - cowBrownByID.age.year;
    return liter;
  },

  calculatePinkMilk: (id) => {
    // Check if the JSON file exists, create it if it doesn't
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // Write JSON file to filePath with stringify (JSON to string)
    }

    const data = fs.readFileSync(filePath); // Read JSON file
    const cowObjList = JSON.parse(data); // parse to JSON format file

    // Find the cow with ID and pink color
    const cowPinkByID = cowObjList.find((cow) => {
      return cow.id === id && cow.color === "pink";
    });

    // Return null if the pink cow is not found
    if (!cowPinkByID) {
      return null;
    }

    // Calculate milk liters for pink cow based on age
    const liter = 30 - cowPinkByID.age.month;
    return liter;
  },
};

module.exports = CowModel;
