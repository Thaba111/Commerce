// src/pages/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on selectedPaymentMethod
    // Implement the logic for each payment gateway integration
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Select Payment Method:</label>
          <select
            value={selectedPaymentMethod}
            onChange={handlePaymentMethodChange}
            className="block w-full mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>Select a payment method</option>
            <option value="pesapal">Pesapal</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">MPesa</option>
          </select>
        </div>

        {selectedPaymentMethod === 'pesapal' && (
          <div>
            <h3 className="text-xl font-bold">Pesapal Payment</h3>
            <p>Redirect to Pesapal payment gateway...</p>
            {/* Implement Pesapal payment form fields */}
          </div>
        )}

        {selectedPaymentMethod === 'paypal' && (
          <div>
            <h3 className="text-xl font-bold">PayPal Payment</h3>
            <p>Redirect to PayPal payment gateway...</p>
            {/* Implement PayPal payment form fields */}
          </div>
        )}

        {selectedPaymentMethod === 'mpesa' && (
          <div>
            <h3 className="text-xl font-bold">MPesa Payment</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                placeholder="Enter your MPesa phone number"
                className="block w-full mt-2 p-2 border border-gray-300 rounded"
              />
            </div>
            {/* Implement MPesa payment form fields */}
          </div>
        )}

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Proceed to Payment
        </button>
      </form>
    </section>
  );
};

export default Checkout;
