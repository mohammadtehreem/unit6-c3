const { Router } = require("express");
const detailsModel = require("../configs/models/bookDetailsModel");
const detailsRouter = Router();

detailsRouter.get("/", async (req, res) => {
  try {
    const data = await detailsModel.find({});
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

detailsRouter.post("/", async (req, res) => {
  try {
    const { title, author, releaseYear, edition, price } = req.body;
    const data = new detailsModel({
      title,
      author,
      releaseYear,
      edition,
      price,
    });
    await data.save();
    res.status(201).send("Details added successfully!");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

detailsRouter.delete("/:id", async (req, res) => {
  try {
    const data = await detailsModel.findByIdAndDelete(id);
    res.status(202).send("Details deleted successfully!");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});
module.exports = detailsRouter;
