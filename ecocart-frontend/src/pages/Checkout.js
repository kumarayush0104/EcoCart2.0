import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart, greenMode, addOrder } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [donation, setDonation] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDonationChange = (e) => {
    const value = parseFloat(e.target.value);
    setDonation(isNaN(value) ? 0 : value);
  };

  const filteredCartItems = greenMode
    ? cartItems.filter(item => item.isGreen || item.isRefurbished)
    : cartItems;

  const totalPrice = filteredCartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return total + priceNumber * item.quantity;
  }, 0) + donation;

  const rewardPoints = greenMode ? Math.floor(totalPrice / 10) + Math.floor(donation / 5) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and order here
    // Add order to orders state
    const newOrder = {
      id: 'ORD' + Math.floor(Math.random() * 1000000),
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      total: '$' + totalPrice.toFixed(2),
      items: filteredCartItems.map(item => ({
        id: item.asin,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    addOrder(newOrder);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Thank you for your purchase!</h1>
        <p className="mt-4">Your order has been received and is being processed.</p>
        {greenMode && (
          <p className="mt-2 text-green-700 font-semibold">
            You earned {rewardPoints} reward points for using Green Mode and donating!
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {greenMode && (
        <div className="mb-4 text-green-700 font-semibold">
          You are in Green Mode. Consider donating to plant trees and reduce your carbon footprint.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength={16}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold" htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              maxLength={5}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold" htmlFor="cvv">CVV</label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength={4}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {greenMode && (
          <>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="donation">Donate to Plant a Tree ($5 per plant)</label>
              <input
                type="number"
                id="donation"
                name="donation"
                min="0"
                step="5"
                value={donation}
                onChange={handleDonationChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4 font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </div>

            <div className="mb-4 text-green-700 font-semibold">
              Reward Points Earned: {rewardPoints}
            </div>
          </>
        )}

        {!greenMode && (
          <div className="mb-4 font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {filteredCartItems.length === 0 ? (
          <p>No products to display.</p>
        ) : (
          <ul>
            {filteredCartItems.map(item => (
              <li key={item.asin} className="mb-2">
                {item.title} x {item.quantity} - ${ (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2) }
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Checkout;
