// src/pages/Confirmation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Payment Confirmation</h2>
      <div className="bg-white p-8 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4">Thank You for Your Purchase!</h3>
        <p className="mb-4">Your payment has been successfully processed. We appreciate your business.</p>
        <p className="mb-4">A confirmation email has been sent to you with the details of your order.</p>
        <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default Confirmation;
