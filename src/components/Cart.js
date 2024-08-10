import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart } = useContext(CartContext);

  const handleRemove = (itemId) => {
    const confirmRemove = window.confirm('Are you sure you want to remove this item from your cart?');
    if (confirmRemove) {
      removeFromCart(itemId);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Your Shopping Cart</h2>
      <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-300">
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-8">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-6 px-4 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">KES {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800 transition duration-300 font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-8 py-4 border-t border-gray-300">
              <span className="text-2xl font-semibold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-gray-900">KES {totalAmount.toLocaleString()}</span>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/checkout"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
