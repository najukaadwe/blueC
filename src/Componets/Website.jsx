import React from 'react';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import Comp6 from './Comp6';
import Comp7 from './Comp7';
import Comp8 from './Comp8';
import Comp9 from './Comp9';
import Comp10 from './Comp10';
 import { Star } from 'lucide-react';
import img1 from '../../components/Website/Allimages/img1.png';
import Comp11 from './Comp11';
import Comp12 from './Comp12';
import Header from './Header';
import { motion } from 'framer-motion';
import BlurText from './BlueT';
const Website = () => {
  return (
    <>
    <Header/>
    <section className="bg-[#0a070b] text-white py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="bg-blue-600 px-2 py-1 rounded text-[#ffffff] mr-2">Sca</span>
          your training business <br />
          with <span className="">ZERO operational hassles</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Deliver training programs, convert insights into profit, and build
          lasting learner loyalty—all under your brand.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded font-semibold">
          Book a Demo
        </button>

        <div className="flex items-center gap-3 pt-4">
          <span className="text-sm">RATED</span>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="text-white ml-2 text-sm">(4.8+)</span>
          </div>
          <div className="flex gap-2 items-center ml-4">
            <img src="/logos/g2.svg" alt="G2" className="h-6" />
            <img src="/logos/capterra.svg" alt="Capterra" className="h-6" />
            <img src="/logos/software-suggest.svg" alt="Software Suggest" className="h-6" />
          </div>
        </div>
      </motion.div>

      {/* Right Image and Graphics */}
      <motion.div
        className="mt-10 md:mt-0 relative flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={img1} alt="Business Woman" className="w-80 h-auto z-10" />

        {/* Floating Icons (animated fade-in one by one) */}
        <motion.img
          src="/images/play-icon.svg"
          className="absolute top-8 left-16 w-6"
          alt=""
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/graph-icon.svg"
          className="absolute top-0 right-20 w-6"
          alt=""
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/card-500.svg"
          className="absolute bottom-10 left-10 w-32"
          alt=""
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/images/pie-chart.svg"
          className="absolute bottom-0 right-12 w-24"
          alt=""
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
    <BlurText text="Hello, animated world!" animateBy="words" />
    <Comp2/>
    <Comp3/>
    <Comp4/>
    <Comp11/>
    <Comp12/>
    <Comp10/>
    
    <Comp9/>
    <Comp8/>
   
 


  
    <Comp7/>
    <Comp5/>
    <Comp6/>
  

   
  
    </>

  );
};

export default Website;
