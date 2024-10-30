import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, onOrderSuccess, clearCart }) => {
  const [userData, setUserData] = useState({ name: '', email: '', address: '' });
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_zSZWEBkO6SaVoQ',
      amount: total * 100,
      currency: 'INR',
      name: 'E-Commerce Platform',
      description: 'Order Payment',
      handler: function (response) {
        onOrderSuccess(response);
        clearCart(); // Clear the cart after successful payment
        navigate('/confirmation'); // Redirect to the order confirmation page
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: '9999999999',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <label className="block text-gray-700 mt-4">Email</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <label className="block text-gray-700 mt-4">Address</label>
        <textarea
          value={userData.address}
          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
          className="w-full p-2 border rounded mt-2"
        />
        <button 
          onClick={handlePayment} 
          className="block w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
