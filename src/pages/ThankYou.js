import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-400 to-orange-500 min-h-screen flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-bold text-green-600 mb-6">Thank You!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been successfully processed! 🎉
        </p>
        <p className="text-md text-gray-600 mb-6">
          We appreciate your purchase and look forward to serving you again.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h3>
          {/* You can dynamically display the order summary here if needed */}
          <p className="text-gray-700">Order ID: #123456</p>
          <p className="text-gray-700">Estimated Delivery: 5-7 Business Days</p>
        </div>
        <div className="flex justify-center mb-6">
          <Link
            to="/track-order"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Track Your Order
          </Link>
        </div>
        <Link
          to="/"
          className="text-blue-700 hover:text-blue-900 text-lg font-medium"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
