const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/timeTracker')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const TimeSchema = new mongoose.Schema({
  url: String,
  duration: Number,
  classification: String,
  date: { type: Date, default: Date.now }
});

const TimeLog = mongoose.model('TimeLog', TimeSchema);

app.post('/track', async (req, res) => {
  const log = new TimeLog(req.body);
  await log.save();
  res.send({ status: 'saved' });
});

app.get('/api/entries', async (req, res) => {
  const entries = await TimeEntry.find();
  console.log(entries); // Log what’s actually in DB
  res.json(entries);
});


app.listen(5000, () => console.log('Server running on port 5000'));
