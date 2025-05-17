import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img3 from "../assets/allimg/img3.png";

const WhiteLabelFeature = () => {
  const featureSections = {
    "For Buyers:": [
      "Browse a wide range of products",
      "View detailed info and seller ratings",
      "Easy checkout with multiple payment options",
      "Track orders and get real-time updates",
    ],
    "For Sellers:": [
      "List products in minutes",
      "Add clear, quality images",
      "Manage inventory and orders",
      "Track sales with real-time analytics",
    ],
    // "Why Choose Us?": [
    //   "✅ Easy to use",
    //   "🔒 Secure transactions",
    //   "🤝 Verified users",
    //   "📱 Mobile-friendly",
    // ],
  };

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
            src={img3}
            alt="E-commerce Services"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            E-commerce Services
          </h2>
          <p className="mb-6 text-lg">
            Buy and sell products seamlessly with features for both customers and vendors.
          </p>

          <div className="space-y-6">
            {Object.entries(featureSections).map(([sectionTitle, items], idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-2">{sectionTitle}</h3>
                <ul className="space-y-2 pl-1">
                  {items.map((item, subIdx) => (
                    <li key={subIdx} className="flex items-start space-x-3">
                      <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                      <span className="text-[#ffffff]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhiteLabelFeature;
