const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/timeTracker', {});

const Schema = new mongoose.Schema({
  url: String,
  duration: Number,
  classification: String
});

const TimeEntry = mongoose.model('TimeEntry', Schema);

TimeEntry.deleteMany({})
  .then(() => {
    return TimeEntry.insertMany([
      { url: "https://www.leetcode.com", duration: 120, classification: "productive" },
      { url: "https://www.github.com", duration: 90, classification: "productive" },
      { url: "https://www.youtube.com", duration: 150, classification: "entertainment" }
    ]);
  })
  .then(() => {
    console.log("✅ Clean data inserted (ChatGPT removed)");
    mongoose.connection.close();
  });
