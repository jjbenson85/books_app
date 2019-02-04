const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: false },
  releaseDate: { type: Date, required: false }
})

module.exports = mongoose.model('Book', bookSchema)
