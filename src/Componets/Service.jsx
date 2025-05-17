import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
// import img4 from "../assets/allimg/img4.png";
import img2 from "../assets/allimg/img2.png";

const chatFeatures = [
  "Instant messaging between businesses and users.",
  "Secure file sharing: resumes, contracts, images.",
  "Real-time notifications for new messages.",
  "Chat history for easy reference.",
  " End-to-end encrypted conversations.",
];

const Service = () => {
  return (
    <section className="py-20 text-white bg-[#0a070b]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Chat 
          </h2>
          <p className="mb-6 text-gray-300">
            Connect instantly with recruiters, job seekers, buyers, or sellers—right inside BlueEra.
          </p>

          <ul className="space-y-3">
            {chatFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={img2}
            alt="Chat UI"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
