import React from 'react';

const TrackOrder = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Track Your Order</h2>
      <p className="text-lg text-gray-700 text-center mb-6">
        Enter your order number below to track the status of your order.
      </p>
      <div className="bg-white p-6 shadow-md rounded-lg border border-gray-300 max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label htmlFor="orderNumber" className="block text-gray-700">Order Number</label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter your order number"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Track Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default TrackOrder;
