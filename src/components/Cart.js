import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 mb-4 border-b">
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
          <div className="flex-1 ml-4">
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <span>Price: ₹{item.price}</span>
          </div>
          <div className="flex items-center">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 text-gray-600 rounded-l">
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 text-gray-600 rounded-r">
              +
            </button>
          </div>
          <button onClick={() => removeItem(item.id)} className="text-red-600 ml-4">
            <AiFillDelete size={24} />
          </button>
        </div>
      ))}
      <h3 className="text-xl font-semibold mt-6">Total: ₹{total}</h3>
      <Link to="/checkout" className="block mt-4 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;