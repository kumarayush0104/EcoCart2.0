import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (asin, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      updateQuantity(asin, quantity);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gray-100 rounded shadow min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.asin} className="cart-item flex bg-white p-4 rounded shadow items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded"
                />
                <div className="cart-item-details flex-1">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    Carbon footprint: {item.co2Emissions} kg CO₂
                  </p>
                  {item.isGreen && (
                    <p className="text-green-600 font-semibold text-sm">
                      + EcoPoints
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.asin, e)}
                    className="w-16 p-1 border border-gray-300 rounded text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.asin)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-lg font-semibold">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="text-right mt-6 font-semibold text-xl">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate('/checkout')}
              className="checkout-btn bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
