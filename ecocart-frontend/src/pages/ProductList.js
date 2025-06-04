import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sampleProducts from '../data/sampleProducts';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = sampleProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <input
        type="text"
        placeholder="Search products"
        className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
{filteredProducts.map(product => (
  <div key={product.asin} className={`border rounded shadow-sm hover:shadow-lg transition-shadow flex flex-col ${product.isGreen ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-contain p-4"
    />
    <div className="flex-grow p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
      <p className="text-green-700 font-bold mb-4">{product.price}</p>
      <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
      <div className="mt-2">
        {product.isGreen && (
          <span className="inline-block bg-green-300 text-green-900 text-xs font-semibold px-2 py-1 rounded mr-2">
            Eco
          </span>
        )}
        {product.isRefurbished && (
          <span className="inline-block bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
            Refurbished
          </span>
        )}
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-grow bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate(`/product/${product.asin}`)}
          className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default ProductList;
