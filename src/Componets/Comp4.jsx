import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img10 from "../assets/img10.png"; // Adjust the path as necessary
import CompC from './CompC';
import listting from "../assets/allimg/listing.png"; // Adjust the path as necessary
import img3 from "../assets/allimg/img3.png"

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

const WhiteLabelFeature = () => {
  const features = [
    "Product and service search tools for seamless discovery.",
    "Communication features to interact with businesses and other users.",
    "Access to job opportunities within the community.",
    "Social networking and community participation to stay connected.",
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
            src={img3}
            alt="White Label Platform"
            className="rounded-xl shadow-lg "
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
            {/* <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
              About Us
            </span> */}
          </div>
          <h2 id="feature-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Individual User Services
          </h2>
          <p className="mb-6 text-lg">
            For individual users, BlueEra enhances engagement and accessibility through:
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

export default WhiteLabelFeature;
