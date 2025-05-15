import React from 'react';
import { motion } from 'framer-motion';
import img23 from "../assets/img23.png"; // Adjust the path as necessary
     


const CTASection = () => {
  return (
    <section className="bg-gradient-to-b py-16 rounded-3xl mx-4 md:mx-12 mt-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img23}
          alt="World Map Background"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 p-5">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Create a World-Class Learning Environment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mt-4 mb-8"
        >
          Ready to transform your online learning experience? Contact us today to kickstart your journey.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Book a Demo
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
