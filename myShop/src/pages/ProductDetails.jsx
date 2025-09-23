import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(AppContext);

  const selectedProduct = product.find((p) => p.id === parseInt(id));

  if (!selectedProduct) 
    return <p className="text-center text-red-500 text-lg mt-10">Product not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            className="w-80 h-80 object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900">{selectedProduct.title}</h1>
          <p className="mt-4 text-gray-700">{selectedProduct.description}</p>
          <p className="mt-6 text-2xl font-bold text-green-600">${selectedProduct.price}</p>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
