import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img7 from "../assets/allimg/img7.png";

const Service4 = () => {
  const features = [
    "Flexible subscription plans tailored to your business needs.",
    "Access premium tools for product promotion and marketing.",
    "Priority support and personalized onboarding.",
    "Advanced analytics to track subscriber growth and engagement.",
  ];

  return (
    <section className="text-white bg-[#0a070b] py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-24 items-center">

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
            alt="Subscription Plans"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscription Services for Businesses</h2>
          <p className="mb-6 text-lg">
            BlueEra offers flexible subscription plans to empower businesses of all sizes with premium tools and insights:
          </p>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium text-white">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Service4;
