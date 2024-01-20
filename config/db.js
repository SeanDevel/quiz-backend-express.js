const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "\n------\nconnection error:"));
db.once("open", function () {
  console.log("\n>>> MongoDB Connected successfully");
});

module.exports = db;
