import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
      <p className="text-lg mb-2">Order ID: {orderDetails?.razorpay_payment_id}</p>
      <p className="text-lg mb-6">Payment Status: Success</p>
      <p className="text-gray-700 mb-4">Your product has been successfully purchased.</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;
