const { Schema, model } = require("mongoose");

const detailsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, requried: true },
  releaseYear: { type: Number, required: true },
  edition: { type: Number, required: true },
  price: { type: Number, required: true },
});

const detailsModel = model("bookDetails", detailsSchema);

module.exports = detailsModel;
