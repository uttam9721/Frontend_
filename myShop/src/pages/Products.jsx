import React, { useContext, useRef, useState } from "react";
import AppContext from "../context/AppContext";

const Products = () => {
  const { product, loading } = useContext(AppContext);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {product.map((item, idx) => {
        // Fake multiple images (API has only 1)
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
          <div
            key={idx}
            className="border shadow rounded-xl p-4 flex flex-col items-center w-[261px]"
          >
            {/* Image Carousel */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="mb-3 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-40 h-40 rounded-lg scroll-smooth"
            >
              {images.map((img, imgIdx) => (
                <img
                  key={imgIdx}
                  src={img}
                  alt={`product-${idx}-${imgIdx}`}
                  className="w-40 h-40 object-contain flex-shrink-0 snap-center"
                />
              ))}
            </div>

            {/* Dots */}
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

            {/* Product Details */}
            <h2 className="text-lg font-bold text-center mt-3">{item.title}</h2>
            <p className="text-sm text-gray-500 text-center">
              {item.description.substring(0, 80)}...
            </p>
            <p className="mt-2 text-md font-semibold text-green-600">${item.price}</p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="cursor-pointer px-4 py-2 border-gray-600 border text-black rounded shadow hover:bg-gray-600 hover:text-white">
                Buy Now
              </button>
              <button className="cursor-pointer px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
