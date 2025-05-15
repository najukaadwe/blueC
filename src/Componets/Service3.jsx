import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img9 from "../assets/img9.png"; // Adjust the path as necessary
import hr from "../assets/allimg/hr.png"; // Adjust the path as necessary
import communiy from "../assets/allimg/communiy.png"; // Adjust the path as necessary
import img6 from "../assets/allimg/img6.png"




const Service3 = () => {
  const features = [
    " Discovery within proximity: Users can search for businesses within a specified radius.",
    "Comprehensive business information: Users can access details; business ",
    // "Multiple batch & branch management",
    // "Custom digital certificates",
  ];

  
   
   


  return (
    <section className="py-20 text-[#ffffff] bg-[#0a070b]">
  
      
  
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="mb-3">
       
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Business Discovery & Location Services
          </h2>
          <p className="mb-6 text-lg">
    When a business registers with the BlueEra app, its services and products become publicly visible, enhancing its reach. Benefits include:
          </p>



          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="font-medium text-[#ffffff]">{feature}</span>
              </li>
            ))}
          </ul>
          <p className='ml-8'>names, descriptions, locations, and contact information provided by registered businesses.</p>
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
            src={img6}
            alt="Knowledge Delivery Demo"
            className="rounded-xl shadow-lg  "
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Service3;
