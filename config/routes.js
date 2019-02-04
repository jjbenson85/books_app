const router = require('express').Router()

const booksController = require('../controllers/books')

router.route('/api/books')
  .get(booksController.index )
  .post(booksController.create )

module.exports = router
