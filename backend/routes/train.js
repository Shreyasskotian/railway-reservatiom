const express = require('express');
const router = express.Router();
const Train = require('../models/train');

// Endpoint to add train details
router.post('/add-train', async (req, res) => {
  try {
    const { name, stations } = req.body;

    if (!name || !stations || stations.length !== 10) {
      return res.status(400).json({ error: 'Invalid data provided' });
    }

    const newTrain = new Train({ name, stations });
    await newTrain.save();

    res.status(201).json({ message: 'Train added successfully', train: newTrain });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to get all trains
router.get('/trains', async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
