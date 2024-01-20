const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  description: { type: String, required: false },
  createAt: { type: Date, required: false },
  updateAt: { type: Date, required: false },
  lastVisitAt: { type: Date, required: false },
  tag: { type: Array, required: false },
  section: [
    {
      seqNumbers: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: false },
      createAt: { type: Date, required: false },
      updateAt: { type: Date, required: false },
      quiz: [
        {
          seqNumbers: { type: String, required: true },
          question: { type: String, required: true },
          answer: { type: String, required: true },
          solution: { type: String, required: true },
          difficultyDegree: { type: Number, required: false },
          createAt: { type: Date, required: false },
          updateAt: { type: Date, required: false },
        },
      ],
    },
  ],
});

const QuizBookModel = mongoose.model("quiz_books", quizBookSchema);

module.exports = QuizBookModel;
