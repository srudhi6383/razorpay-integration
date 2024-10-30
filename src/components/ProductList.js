import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 bg-white shadow-lg transition-transform transform hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-md" />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-blue-600">₹{product.price}</span>
              <button 
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart <AiOutlineShoppingCart className="ml-2" />
              </button>
            </div>
            <Link 
              to={`/product/${product.id}`} 
              className="block mt-2 text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;