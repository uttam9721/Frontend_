import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-lg">Your cart is empty.</p>;
  }

  const handleQuantityChange = (idx, delta) => {
    toast.success('added in the cart')
    const updatedCart = [...cart];
    updatedCart[idx].quantity = Math.max(1, (updatedCart[idx].quantity || 1) + delta);
    setCart(updatedCart);
  };

  return (
    <div className="p-5 space-y-6">
      {cart.map((item, idx) => (
        <div key={idx} className="border rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-6 bg-white">
          {/* Left: Image */}
          <div className="flex-shrink-0 border p-2 rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Right: Info + Quantity + Buy Now */}
          <div className="flex-1 flex flex-col justify-between border p-4 rounded-lg">
            <div>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.description.substring(0, 100)}...</p>
              <p className="text-green-600 font-bold mb-2">₹ {item.price}</p>
              {item.rating && (
                <p className="text-sm text-gray-500">
                  Rating: {item.rating.rate} ⭐ ({item.rating.count} reviews)
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 mt-4">
              {/* Quantity controls */}
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(idx, -1)}
                  className="px-4 py-2 bg-gray-200 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-6 py-2">{item.quantity || 1}</span>
                <button
                  onClick={() => handleQuantityChange(idx, 1)}
                  className="px-4 py-2 bg-gray-200 rounded-r-lg"
                >
                  +
                </button>
              </div>
              {/* Buy Now Button */}
             <Link to={'/address'}>
              <button className="px-6 py-2 bg-gray-600 cursor-pointer text-white font-semibold rounded-lg hover:bg-gray-700 transition">
                Buy Now
              </button>
             </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
