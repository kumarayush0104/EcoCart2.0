import React, { useState, useEffect } from 'react';
import sampleProducts from '../data/sampleProducts';

const CarbonFootprintDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  useEffect(() => {
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Carbon Footprint Dashboard</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search products by name or ID"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full max-w-md"
        />
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Product ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">CO2 Emissions (kg)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Shipping Distance (km)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Packaging Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.co2Emissions}</td>
                <td className="border border-gray-300 px-4 py-2">{product.shippingDistance}</td>
                <td className="border border-gray-300 px-4 py-2">{product.packagingType}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarbonFootprintDashboard;
