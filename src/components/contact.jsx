/* eslint-disable no-unused-vars */
// src/components/contact.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// --- Skeleton Loader Component ---
function ContactSkeleton() {
  return (
    <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10 animate-pulse">
      <div className="h-8 w-32 bg-gray-600 rounded mb-6"></div>
      <div className="h-1 w-10 bg-gray-500 rounded mb-8"></div>
      <div className="h-64 w-full bg-gray-700 rounded-xl"></div>
    </div>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (for example, map or data)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="contact"
      className="mt-24 md:mt-0 pt-4 pb-6 px-4 max-w-5xl mx-auto md:ml-[20rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {loading ? (
        <ContactSkeleton />
      ) : (
        <div className="w-full bg-[#1B1B1B] rounded-2xl shadow-xl border border-[#2A2A2A] p-10">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
            Contact
          </h2>
          <span className="block w-10 h-1 bg-white rounded ml-0 mb-8"></span>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.697410074218!2d121.03608225!3d14.5774351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c835252875d9%3A0x8898952467d38392!2sMandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1628173499000!5m2!1sen!2sph"
            className="w-full h-64 rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
            style={{ filter: "grayscale(1) invert(1) brightness(0.8)" }}
          ></iframe>
        </div>
      )}
    </motion.section>
  );
}
