import React from 'react';
import { Link } from 'react-router-dom';

const Accounts = () => {
  // Mock data
  const user = {
    name: 'Ayush Kumar',
    email: 'kumarayush0104@gmail.com',
  };

  const paymentOptions = [
    { id: 1, type: 'Visa', last4: '1234', expiry: '12/24' },
    { id: 2, type: 'MasterCard', last4: '5678', expiry: '11/23' },
  ];

  const addresses = [
    { id: 1, label: 'Home', address: 'Daltonganj, Jharkhand' },
    { id: 2, label: 'Work', address: 'IIEST Shibpur, Howrah' },
  ];

  const wishLists = [
    { id: 1, name: 'Birthday Wishlist', itemsCount: 5 },
    { id: 2, name: 'Christmas Wishlist', itemsCount: 3 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Account</h1>
        <Link to="/lists" title="Watchlist">
          {/* Watchlist logo as an SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 hover:text-blue-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
        <ul>
          {paymentOptions.map(option => (
            <li key={option.id} className="mb-2">
              {option.type} ending in {option.last4} (Expires {option.expiry})
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Addresses</h2>
        <ul>
          {addresses.map(addr => (
            <li key={addr.id} className="mb-2">
              <strong>{addr.label}:</strong> {addr.address}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Wish Lists</h2>
        <ul>
          {wishLists.map(list => (
            <li key={list.id} className="mb-2">
              {list.name} ({list.itemsCount} items)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Accounts;
