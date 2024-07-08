const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

const reviewModel = model("reviews", reviewSchema);

module.exports = reviewModel;
