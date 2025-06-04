const express = require('express');
const router = express.Router();
const CarbonFootprint = require('../models/CarbonFootprint');

// Get carbon footprint data by productId
router.get('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const carbonFootprint = await CarbonFootprint.findOne({ productId });
    if (!carbonFootprint) {
      return res.status(404).json({ message: 'Carbon footprint data not found' });
    }
    res.json(carbonFootprint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error retrieving carbon footprint data' });
  }
});

// Create or update carbon footprint data
router.post('/', async (req, res) => {
  try {
    const { productId, co2Emissions, shippingDistance, packagingType } = req.body;
    let carbonFootprint = await CarbonFootprint.findOne({ productId });
    if (carbonFootprint) {
      carbonFootprint.co2Emissions = co2Emissions;
      carbonFootprint.shippingDistance = shippingDistance;
      carbonFootprint.packagingType = packagingType;
      await carbonFootprint.save();
    } else {
      carbonFootprint = new CarbonFootprint({ productId, co2Emissions, shippingDistance, packagingType });
      await carbonFootprint.save();
    }
    res.status(201).json(carbonFootprint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error saving carbon footprint data' });
  }
});

// Delete carbon footprint data by productId
router.delete('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await CarbonFootprint.deleteOne({ productId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Carbon footprint data not found' });
    }
    res.json({ message: 'Carbon footprint data deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting carbon footprint data' });
  }
});

module.exports = router;
