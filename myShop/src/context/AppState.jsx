// import React, { useEffect, useState } from "react";
// import AppContext from "./AppContext";
// import toast, { Toaster } from 'react-hot-toast';

// const AppState = ({ children }) => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cart,setCart]=useState([]);

//   const fetchProduct = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");

      
//       const data = await response.json();
//       setProduct(data);
      
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   const addToCart=(products)=>{
//     setCart([...cart,products])
//     toast.success('added to cart')

//   }

//   return (
//     <AppContext.Provider value={{ product,fetchProduct, loading,cart,setCart,addToCart }}>
//             <Toaster position="top-center" reverseOrder={false} />
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppState;






import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import toast, { Toaster } from 'react-hot-toast';

const AppState = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // Fetch products
  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Add To Cart Logic (with qty)
  const addToCart = (products) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === products.id
      );

      if (existingItem) {
        // Increase quantity if product already exists
        return prevCart.map((item) =>
          item.id === products.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // Add new product with qty = 1
        return [...prevCart, { ...products, qty: 1 }];
      }
    });

    toast.success("Added to cart");
  };

  return (
    <AppContext.Provider
      value={{
        product,
        fetchProduct,
        loading,
        cart,
        setCart,
        addToCart,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
