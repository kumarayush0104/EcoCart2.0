import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { greenMode, toggleGreenMode } = useCart();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate('/products?search=' + encodeURIComponent(searchTerm.trim()));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-amazon_blue p-3 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center space-x-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-28 object-contain"
          />
        </Link>
        <div className="text-sm flex items-center space-x-1">
          <span role="img" aria-label="location">📍</span>
          <span className="text-black">Deliver to India</span>
        </div>
        <div className="flex flex-grow items-center max-w-3xl">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="flex-grow p-2 rounded-l-md text-black focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-400 p-2 rounded-r-md hover:bg-yellow-500"
            aria-label="Search"
          >
            🔍
          </button>
        </div>
        <label className="flex items-center space-x-1 cursor-pointer text-green-400">
          <input
            type="checkbox"
            checked={greenMode}
            onChange={toggleGreenMode}
            className="w-4 h-4"
          />
          <span>Green Mode 🌿</span>
        </label>
        <Link to="/accounts" className="flex items-center">
  <span role="img" aria-label="account">👤</span>
  <span className="text-black hover:text-yellow-400 bold">Account & Lists</span>
</Link>
<Link to="/orders" className="flex items-center">
  <span role="img" aria-label="returns">↩️</span>
  <span className="text-black hover:text-yellow-400 bold">Returns & Orders</span>
</Link>
<Link to="/cart" className="flex items-center">
  <span role="img" aria-label="cart">🛒</span>
  <span className="text-black hover:text-yellow-400 bold">Cart</span>
</Link>
      </nav>
    </header>
  );
};

export default Header;