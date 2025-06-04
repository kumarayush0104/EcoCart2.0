const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const carbonFootprintRoutes = require('../routes/carbonFootprint');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://testdb:KPC2jlPP2XLj3V7q@cluster0.ocx18hq.mongodb.net/newdb?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Register routes
app.use('/api/carbon-footprint', carbonFootprintRoutes);
const productRoutes = require('../routes/products');
app.use('/api/products', productRoutes);

// Placeholder for additional routes (e.g., rewards, orders) to be added later

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
