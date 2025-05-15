import React from 'react';
import { motion } from 'framer-motion';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';



const ClientTrustSection = () => {
  const logos = [
    { src: img2, alt: 'CollegeDekho' },
    { src: img3, alt: 'INFS' },
    { src: img4, alt: 'McGraw Hill' },
    { src: img5, alt: 'ISKCON' },
    { src: img6, alt: 'Aditya Birla' },
    { src: img7, alt: 'LearnBay' },
    { src: img8, alt: 'LawSikho' },
  ];

  return (
    <section className="pt-16 pb-8 text-[#ffffff] bg-[#0a070b]">
      {/* Top Card with Logos */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-[#0a070b] rounded-xl shadow-md p-6 flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        
        >
          <div className="text-sm font-medium text-center space-x-4 text-[#ffffff]">
            <span>5000+ <span className="font-bold">Training Businesses</span></span>
            <span className="text-blue-600">| Serving More Than 5.5M Students</span>
            <span>| <span className="font-bold">Across 160+ Countries</span></span>
          </div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 mt-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          
          >
            {logos.map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-10 max-w-[120px] object-contain"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Title */}
      {/* <motion.div
        className="bg-[#0a070b] text-center py-16 mt-[-40px] rounded-t-3xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
     
      >
        <p className="text-blue-500 font-medium text-sm">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Integrated training suite</h2>
        <p className="text-white mt-3 text-lg">
          Break Free from Software Overload: <span className="text-blue-600 font-medium">No More Juggling Multiple Tools!</span>
        </p>
      </motion.div> */}
    </section>
  );
};

export default ClientTrustSection;
