const { connect } = require("mongoose");

const connectToDB = async (url) => {
  try {
    connect(url);
  } catch (error) {
    console.log("Error connecting with the database");
  }
};

module.exports = connectToDB;
