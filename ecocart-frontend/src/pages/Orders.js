import React from 'react';
import { useCart } from '../context/CartContext';

const initialMockOrders = [
  {
    id: 'ORD12345',
    date: '2024-05-01',
    status: 'Delivered',
    total: '$120.50',
    items: [
      { id: 'P1', title: 'Eco-friendly Water Bottle', quantity: 1, price: '$15.99' },
      { id: 'P2', title: 'Reusable Shopping Bag', quantity: 2, price: '$9.99' },
    ],
  },
  {
    id: 'ORD12346',
    date: '2024-04-15',
    status: 'Shipped',
    total: '$45.00',
    items: [
      { id: 'P3', title: 'Solar Charger', quantity: 1, price: '$29.99' },
      { id: 'P4', title: 'Bamboo Toothbrush', quantity: 1, price: '$4.99' },
    ],
  },
];

const Orders = () => {
  const { orders } = useCart();

  // Combine initial mock orders with orders from context
  const combinedOrders = [...initialMockOrders, ...orders];

  // Function to generate random rewards points and donation amount
  const getRandomRewards = () => Math.floor(Math.random() * 100) + 1; // 1 to 100 points
  const getRandomDonation = () => (Math.random() * 20).toFixed(2); // $0.00 to $20.00

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      {combinedOrders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        combinedOrders.map(order => {
          const rewardsPoints = getRandomRewards();
          const donationAmount = getRandomDonation();

          return (
            <section key={order.id} className="mb-8 border border-gray-300 rounded p-4">
              <div className="flex justify-between mb-2">
                <span><strong>Order ID:</strong> {order.id}</span>
                <span><strong>Date:</strong> {order.date}</span>
                <span><strong>Status:</strong> {order.status}</span>
              </div>
              <ul className="mb-2">
                {order.items.map(item => (
                  <li key={item.id} className="flex justify-between mb-1">
                    <span>{item.title} x {item.quantity}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right font-semibold">Total: {order.total}</div>
              <div className="mt-2 text-right text-green-700">
                <p>Rewards Points Earned: {rewardsPoints}</p>
                <p>Amount Donated for Planting: ${donationAmount}</p>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default Orders;
