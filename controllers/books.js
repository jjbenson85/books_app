const Book = require('../models/book')

function indexRoute(req, res){

  const { fields, ...query} = req.query
  const select = fields ? fields.split(',') : []
  Book
    .find(query,select )
    .then(films => res.status(200).json(films))
}

function createRoute(req, res){
  Book
    .create(req.body)
    .then(film => res.status(201).json(film))
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: indexRoute,
  create: createRoute
}
