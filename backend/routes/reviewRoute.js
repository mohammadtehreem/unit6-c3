const { Router } = require("express");
const reviewRouter = Router();
const reviewModel = require("../configs/models/reviewModel");

reviewRouter.get("/", async (req, res) => {
  try {
    const data = await reviewModel.find({});
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

reviewRouter.post("/", async (req, res) => {
  try {
    const { rating, review } = req.body;
    // input validation
    if (!rating || !review) {
      return res.send("Fields Missing");
    }
    const data = new reviewModel({ rating, review });
    await data.save();
    res.status(201).send("Review saved successfully!");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

reviewRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await reviewModel.findByIdAndDelete(id);
    res.status(202).send("Review deleted succesfully!");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = reviewRouter;
