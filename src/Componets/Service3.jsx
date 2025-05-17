import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img6 from "../assets/allimg/img6.png";

const Service3 = () => {
  const features = {
    "For Individuals:": [
      "Personal tax planning & income tax return (ITR) filing",
      "Wealth management & investment advisory",
      "Retirement & estate planning",
      "Real estate financial consulting",
      "Freelancers’ financial structuring and GST compliance"
    ],
    "For Businesses:": [
      "Full-spectrum CA services (audits, filings, GST, compliance)",
      "Bookkeeping, budgeting, and payroll management",
      "Financial forecasting and funding preparation",
      "Business valuation and risk assessments"
    ]
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Holistic Consulting Services for Individuals & Businesses
          </h2>

          <h2 className="text-xl font-bold mb-6">Financial Consultant</h2>

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
            src={img6}
            alt="Consulting Services"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Service3;
