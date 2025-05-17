import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img2 from "../assets/allimg/img2.png";

const FeatureHighlight = () => {
  const features = {
    "For Job Seekers:": [
      "Explore verified job listings",
      "Filter by role, location, and more",
      "Apply easily with your resume and cover letter"
    ],
    "For Recruiters:": [
      "Post and manage job listings effortlessly",
      "Update openings anytime",
      "Review applications and connect with top talent"
    ]
  };

  return (
    <section className="py-20 text-[#ffffff] bg-[#0a070b]">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Services We Provide
      </h2>
      <h2 className="text-xl font-bold mb-28 text-center">
        We help you weather today’s uncertainty through our best team.
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Employment Services
          </h2>
          <p className="mb-6 text-lg">
            The platform facilitates job opportunities within the BlueEra community:
          </p>

          <div className="space-y-6">
            {Object.entries(features).map(([category, items], idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
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
            alt="Employment Services"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureHighlight;
