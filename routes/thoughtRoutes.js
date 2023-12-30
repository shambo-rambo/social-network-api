// routes/thoughtRoutes.js

const express = require('express');
const Thought = require('../models/Thought');
const router = express.Router();

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new thought
router.post('/', async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET one thought by id
router.get('/:id', getThought, (req, res) => {
  res.json(res.thought);
});

// PUT update a thought by id
router.put('/:id', getThought, async (req, res) => {
  if (req.body.thoughtText != null) {
    res.thought.thoughtText = req.body.thoughtText;
  }
  if (req.body.username != null) {
    res.thought.username = req.body.username;
  }
  try {
    const updatedThought = await res.thought.save();
    res.json(updatedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE remove a thought by id
router.delete('/:id', getThought, async (req, res) => {
  try {
    await res.thought.remove();
    res.json({ message: 'Deleted Thought' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new reaction
router.post('/:id/reactions', getThought, async (req, res) => {
  try {
    const newReaction = new Thought(req.body);
    const savedReaction = await newReaction.save();
    res.status(201).json(savedReaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE remove a reaction by id
router.delete('/:id/reactions', getThought, async (req, res) => {
  try {
    await res.thought.remove();
    res.json({ message: 'Deleted Reaction' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get a thought by id, called by GET, PUT, and DELETE
async function getThought(req, res, next) {
  try {
    thought = await Thought.findById(req.params.id);
    if (thought == null) {
      return res.status(404).json({ message: 'Cannot find thought' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.thought = thought;
  next();
}

module.exports = router;
