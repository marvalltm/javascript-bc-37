const express = require('express');
const { getCard, addToCard, deleteFromCard } = require('../controllers/card');

const router = express.Router();

router.get('/', getCard);
router.post('/:id', addToCard);
router.delete('/:id', deleteFromCard);

module.exports = {
  routes: router,
};
