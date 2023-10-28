const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/MetaGrowth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB model
const DataModel = mongoose.model('Data', new mongoose.Schema({
  index: Number,
  section: String,
  question: String,
  selectedAnswer: String,
  selectedWeightage: String,
  selectedValue: Number,
}));

// API endpoint to save data
app.post('/api/saveData', async (req, res) => {
  try {
    const data = req.body;
    const newData = new DataModel(data);
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving data' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
