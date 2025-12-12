import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
// import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    altNumber: "",
    pincode: "",
    state: "",
    address: "",
    landmark: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const { name, phone, altNumber, pincode, state, address, landmark } = form;

    if (!name || !phone || !altNumber || !pincode || !state || !address || !landmark) {
      // toast.error("All fields are required!");
      return;
    }

    // toast.success("Processing Payment...");
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      // toast.success("Payment Successful!");
      navigate("/"); // redirect after success
    }, 3000);
  };

  return (
    <div className="relative max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md overflow-hidden">
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Delivery Address</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Alternate Number</label>
          <input
            type="text"
            name="altNumber"
            value={form.altNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter alternate number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter pincode"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          value={form.state}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter state"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Full Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          placeholder="Enter full address"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Nearby Famous Place</label>
        <input
          type="text"
          name="landmark"
          value={form.landmark}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter nearby landmark"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handlePayment}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300"
        >
          Pay Now
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-green-50 bg-opacity-90 rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-600 mb-4" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold text-green-700"
            >
              Payment Successful!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
