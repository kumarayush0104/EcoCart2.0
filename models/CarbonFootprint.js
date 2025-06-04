const mongoose = require('mongoose');

const carbonFootprintSchema = new mongoose.Schema({
  productId: String,
  co2Emissions: Number,
  shippingDistance: Number,
  packagingType: String,
});

const CarbonFootprint = mongoose.model('CarbonFootprint', carbonFootprintSchema);

module.exports = CarbonFootprint;