// import img1 from "../assets/category-page-02-image-card-02.jpg";
// import img2 from "../assets/category-page-02-image-card-03.jpg";
// import img3 from "../assets/category-page-07-product-02.jpg";
// import img4 from "../assets/home-page-02-product-02.jpg";
// import img5 from "../assets/home-page-02-product-03.jpg";
// import img6 from "../assets/pexels-solliefoto-298863.jpg";
// import img7 from "../assets/pexels-olly-1050244.jpg";

// const data = [
//   {
//     id: 1,
//     name: "Black T-Shirt",
//     description: "Comfortable cotton t-shirt in black color.",
//     size: "M, L, XL",
//     category: "Clothing",
//     img: img1
//   },
//   {
//     id: 2,
//     name: "White T-Shirt",
//     description: "Classic white cotton t-shirt, perfect for casual wear.",
//     size: "M, L, XL",
//     category: "Clothing",
//     img: img2
//   },
//   {
//     id: 3,
//     name: "Grey Tote Bag",
//     description: "Durable tote bag with leather handles.",
//     size: "Standard",
//     category: "Bags",
//     img: img3
//   },
//   {
//     id: 4,
//     name: "Coffee Mug",
//     description: "Ceramic coffee mug in matte black finish.",
//     size: "300ml",
//     category: "Kitchen",
//     img: img4
//   },
//   {
//     id: 5,
//     name: "Notebook",
//     description: "Hardcover notebook for office and school use.",
//     size: "A5",
//     category: "Stationery",
//     img: img5
//   },
//   {
//     id: 6,
//     name: "Luxury Shoes",
//     description: "Premium leather formal shoes for men.",
//     size: "7, 8, 9, 10",
//     category: "Footwear",
//     img: img6
//   },
//   {
//     id: 7,
//     name: "Gift Boxes",
//     description: "Beautiful gift boxes with ribbon for occasions.",
//     size: "Small, Medium, Large",
//     category: "Gifts",
//     img: img7
//   }
// ];

// export default data;



import img1 from "../assets/category-page-02-image-card-02.jpg";
import img2 from "../assets/category-page-02-image-card-03.jpg";
import img3 from "../assets/category-page-07-product-02.jpg";
import img4 from "../assets/home-page-02-product-02.jpg";
import img5 from "../assets/home-page-02-product-03.jpg";
import img6 from "../assets/pexels-solliefoto-298863.jpg";
import img7 from "../assets/pexels-olly-1050244.jpg";

const data = [
  {
    id: 1,
    name: "Black T-Shirt",
    description: "Comfortable cotton t-shirt in black color.",
    sizes: [
      { size: "S", stock: 0 },
      { size: "M", stock: 8 },
      { size: "L", stock: 3 },
      { size: "XL", stock: 0 }, // out of stock
    ],
    category: "Clothing",
    img: img1,
  },
  {
    id: 2,
    name: "White T-Shirt",
    description: "Classic white cotton t-shirt, perfect for casual wear.",
    sizes: [
      { size: "S", stock: 2 },
      { size: "M", stock: 0 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 4 },
    ],
    category: "Clothing",
    img: img2,
  },
  {
    id: 3,
    name: "Grey Tote Bag",
    description: "Durable tote bag with leather handles.",
    sizes: [{ size: "Standard", stock: 12 }],
    category: "Bags",
    img: img3,
  },
  {
    id: 4,
    name: "Coffee Mug",
    description: "Ceramic coffee mug in matte black finish.",
    sizes: [{ size: "300ml", stock: 20 }],
    category: "Kitchen",
    img: img4,
  },
  {
    id: 5,
    name: "Notebook",
    description: "Hardcover notebook for office and school use.",
    sizes: [{ size: "A5", stock: 15 }],
    category: "Stationery",
    img: img5,
  },
  {
    id: 6,
    name: "Luxury Shoes",
    description: "Premium leather formal shoes for men.",
    sizes: [
      { size: "7", stock: 2 },
      { size: "8", stock: 5 },
      { size: "9", stock: 0 }, // out of stock
      { size: "10", stock: 4 },
    ],
    category: "Footwear",
    img: img6,
  },
  {
    id: 7,
    name: "Gift Boxes",
    description: "Beautiful gift boxes with ribbon for occasions.",
    sizes: [
      { size: "Small", stock: 10 },
      { size: "Medium", stock: 6 },
      { size: "Large", stock: 0 }, // out of stock
    ],
    category: "Gifts",
    img: img7,
  },
];

export default data;