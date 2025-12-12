import React, { useContext, useRef, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
// import Address from "./Address";
const ProductCard = ({ item }) => {
  const { addToCart } = useContext(AppContext);
  const images = [item.image, item.image, item.image];
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrent(index);
    }
  };
  const goToImage = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border rounded-xl shadow-lg p-4 flex flex-col items-center w-full max-w-xs mx-auto bg-white hover:shadow-2xl transition-shadow">
      {/* Link only for image and title */}
      <Link
        to={`/products/${item.id}`}
        className="flex flex-col items-center w-full"
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mb-3 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-40 h-40 rounded-lg scroll-smooth"
        >
          {images.map((img, imgIdx) => (
            <img
              key={imgIdx}
              src={img}
              alt={`product-${item.id}-${imgIdx}`}
              className="w-40 h-40 object-contain flex-shrink-0 snap-center"
            />
          ))}
        </div>

        <div className="flex justify-center mt-2 space-x-1">
          {images.map((_, dotIdx) => (
            <span
              key={dotIdx}
              onClick={() => goToImage(dotIdx)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                current === dotIdx ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-center mt-3 text-gray-800">
          {item.title}
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          {item.description.substring(0, 80)}...
        </p>
        <p className="mt-2 text-md font-bold text-green-600">${item.price}</p>
      </Link>

      {/* Buttons outside of Link */}
      <div className="flex gap-3 mt-4 w-full justify-center">
        <div className="flex-1 cursor-pointer px-4 py-2 border border-gray-600 text-gray-800 rounded-lg shadow hover:bg-gray-600 hover:text-white transition">
          Buy Now
        </div>
        <button
          onClick={() => addToCart(item)}
          className="flex-1 cursor-pointer px-4 py-2 bg-gray-300 rounded-lg shadow hover:bg-gray-400 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const { product, loading } = useContext(AppContext);

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold mt-10">
        Loading products...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {product.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
