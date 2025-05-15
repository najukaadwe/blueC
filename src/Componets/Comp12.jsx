import React from 'react';
import { CheckCircle } from 'lucide-react';
import img13 from "../assets/img13.png"; // Adjust the path as necessary
import { motion } from 'framer-motion';

const Comp12 = () => {
  const features = [
    "Track learner & course performance",
    "Comprehensive reporting & analytics",
    "Automated test grading & result publication",
    "Do more with a centralized dashboard"
  ];

  return (
    <section className="text-[#ffffff] bg-[#0a070b] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img13}
            alt="White Label Platform"
            className="rounded-xl shadow-lg max-w-full w-[500px]"
          />
        </motion.div>

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
              Business Intelligence & Productivity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline operations while improving productivity with robust tools
          </h2>
          <p className="mb-6 text-lg">
            Save time & money with automation & advanced reporting. Let our robust business intelligence guide your way to success. Transform raw data into actionable strategies while boosting your team's productivity.
          </p>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Comp12;
