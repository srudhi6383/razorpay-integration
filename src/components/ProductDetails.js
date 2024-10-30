import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((prod) => prod.id === parseInt(id));

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="mt-4 text-gray-700">{product.fullDescription}</p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-semibold text-blue-600">₹{product.price}</span>
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;