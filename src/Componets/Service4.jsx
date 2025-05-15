import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img10 from "../assets/img10.png"; // Adjust the path as necessary
import CompC from './CompC';
import business from "../assets/allimg/business.png"; // Adjust the path as necessary
import img7 from "../assets/allimg/img7.png"

const FeatureCard = ({ title, value }) => (
  <li className=" bg-black rounded-xl shadow-md w-72 text-center">
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <CompC
      value={value}
      min={0}
      max={100}
      gaugePrimaryColor="#4f46e5"
      gaugeSecondaryColor="#e5e7eb"
      className="mx-auto"
    />
  </li>
);

const Service4 = () => {
  const features = [
    "Product and service listings for visibility and promotion",
    "Marketing support and promotional tools to enhance reach.",
    "Business-to-business networking for collaboration and growth.",
    "Direct customer engagement for stronger connections.",
  ];





  
  



  return (
    <section className="text-white bg-[#0a070b] py-20">
      <div className=" mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <img
            src={img7}
            alt="White Label Platform"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
        >
          <div className="mb-3">
      
          </div>
          <h2 id="feature-heading" className="text-3xl md:text-4xl font-bold mb-4">
        Business Services
          </h2>
          <p className="mb-6 text-lg">
       BlueEra is open to businesses of all sizes, from street vendors to large enterprises. It provides:
          </p>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium text-[#ffffff]">{feature}</span>
              </li>
            ))}
          </ul>

        </motion.div>
      </div>
    </section>
  );
};

export default Service4;
