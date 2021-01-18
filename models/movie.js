const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  posterImage: {
    type: String,
    required: true
  },
  backdropImage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviewCount: {
    type: Number,
    required: true
  },
  release: {
    type: Date,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
