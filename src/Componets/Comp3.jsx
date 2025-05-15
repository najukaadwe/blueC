import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img9 from "../assets/img9.png"; // Adjust the path as necessary
import hr from "../assets/allimg/hr.png"; // Adjust the path as necessary
import img2 from "../assets/allimg/img2.png"




const FeatureHighlight = () => {
  const features = [
    "For job seekers : Search and apply for employment opportunities",
    "For businesses : Post job openings and recruit potential employees",
    // "Multiple batch & branch management",
    // "Custom digital certificates",
  ];

  return (
    <section className="py-20 text-[#ffffff] bg-[#0a070b]">
      <h2 className="text-3xl  font-bold  mb-4 text-center">


        Services We Provide






      </h2>
        <h2 className="text-xl  font-bold  mb-14 text-center">We help you weather today’s uncertainty through our best team.</h2>
  
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-3">
            {/* <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
              Features
            </span> */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Employment Services
          </h2>
          <p className="mb-6 text-lg">
            The platform facilitates job opportunities within the BlueEra community:
          </p>

          {/* <p className='mb-6 text-sm'>Here’s what you can do with the BlueEra app:</p>
                <p className='mb-6 text-sm font-semibold'>  Discover Local Businesses</p> */}


          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium text-[#ffffff]">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Section with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={img2}
            alt="Knowledge Delivery Demo"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureHighlight;
