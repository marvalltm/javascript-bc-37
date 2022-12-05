const express = require('express');
const { getProducts, getProduct } = require('../controllers/product');

const router = express.Router();

router.get('/all', getProducts);
router.get('/:id', getProduct);

module.exports = {
  routes: router,
};
