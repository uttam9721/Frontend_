import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext"; // ✅ correct import
import Products from "./Products";

const SearchItem = () => {
  const { term } = useParams();
  const { fetchProduct, product, loading } = useContext(AppContext);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const data = product.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    }
  }, [term, product]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Search Results for: {term}</h2>
      {filterData.length > 0 ? (
        <Products item={filterData} />
      ) : (
        <p>No products found for "{term}"</p>
      )}
    </div>
  );
};

export default SearchItem;
