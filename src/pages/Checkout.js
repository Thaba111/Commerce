import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    accountName: '',
    bankName: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!bankDetails.accountNumber) errors.accountNumber = 'Account number is required';
    if (!bankDetails.accountName) errors.accountName = 'Account name is required';
    if (!bankDetails.bankName) errors.bankName = 'Bank name is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    // Handle the submission of bank details and navigation to thank-you page
    alert('Payment details submitted successfully. Thank you for your purchase!');
    navigate('/thank-you'); // Navigate to Thank You page
  };
  

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between my-2">
              <span>{item.name}</span>
              <span>KES {item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between my-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">KES {totalAmount.toLocaleString()}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-gray-700">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-gray-700">Account Name</label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              value={bankDetails.accountName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.accountName && <p className="text-red-500 text-sm">{errors.accountName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="bankName" className="block text-gray-700">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Complete Purchase</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
