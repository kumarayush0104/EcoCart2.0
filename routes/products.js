const express = require('express');
const router = express.Router();
const sampleProducts = require('../backend/sampleProducts');

// Get all products
router.get('/', (req, res) => {
  res.json(sampleProducts);
});

// Get product by ASIN
router.get('/:asin', (req, res) => {
  const asin = req.params.asin;
  const product = sampleProducts.find(p => p.asin === asin);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
