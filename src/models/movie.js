// models/Movie.js

import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Store the model in a named variable
export const movieModel = mongoose.model('Movie', movieSchema);
