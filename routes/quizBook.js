const express = require("express");
const router = express.Router();
const QuizBookModel = require("../model/QuizBookModel");
const { DateTime } = require("luxon");

router.get("/find_all", async (req, res) => {
  try {
    const data = await QuizBookModel.find({}, "title description");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/find_by_id/:id", async (req, res) => {
  try {
    const data = await QuizBookModel.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { title, author, description, timezone } = req.body;
    const newQuizBook = new QuizBookModel({
      title,
      author,
      description,
      createAt: DateTime.now().setZone(timezone).toISO()
    });
    await newQuizBook.save();
    res.json(newQuizBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
