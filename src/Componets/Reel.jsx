import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img4 from "../assets/allimg/img4.png";

const Reel = () => {
  const features = [
    "Clearly introduce your brand or product.",
    "Use engaging words like “discover” and “explore.”",
    "Keep it brief for social media impact.",
    "Show your unique story with visuals.",
    "Include testimonials or demos for trust.",
    "Optimize for mobile viewing."
  ];

  return (
    <section className="py-20 text-[#ffffff] bg-[#0a070b]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Reel</h2>
          <p className="mb-6 text-lg">
            A quick, powerful way to showcase your brand and engage your audience.
          </p>

          <ul className="space-y-4 pl-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span>{feature}</span>
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
            src={img4}
            alt="Business Reel Visual"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Reel;
