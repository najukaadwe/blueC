import React, { useState, useEffect } from 'react';
import img14 from "../assets/img14.png";
import img5 from "../assets/img5.png";
import client from "../assets/allimg/client.png";

// Testimonial Data
const testimonials = [
  {
    img: client,
    logo: img5,
    learners: "16K+",
    courses: "288+",
    liveClasses: "4K+",
    quote: "The team at BlueCS is highly professional and knowledgeable. They took the time to understand our needs and delivered solutions that exceeded our expectations. Their insights have been invaluable to our company’s growth.",
    name: "Professional & Reliable Team",
    title: "Neha Sharma",
  },
  {
    img: client,
    logo: img5,
    learners: "25K+",
    courses: "300+",
    liveClasses: "6K+",
    quote: "BlueCS provided outstanding consulting services that transformed our business operations. Their financial advisory expertise helped us make strategic decisions with confidence. Highly recommended!",
    name: "Exceptional Consulting & Advisory Services",
    title: " Ravi Kumar",
  },
    {
    img: client,
    logo: img5,
    learners: "25K+",
    courses: "300+",
    liveClasses: "6K+",
    quote: "BlueCS goes beyond traditional consulting. Their innovative approach and commitment to excellence make them stand out. Their support has been instrumental in optimizing our business processes.",
    name: "Innovative Solutions & Great Support",
    title: "Arun Menon",
  },

  // Add more testimonials here
];

const TestimonialISKCON = () => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const t = testimonials[current];

  return (
    <section className="text-[#ffffff] ">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow transition-all duration-700 ease-in-out">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Testimonial */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
           <p className="font-bold text-lg">{t.name}</p>
            {/* <img src={t.logo} alt="ISKCON Logo" className="w-20 mb-6" /> */}
            {/* <div className="flex gap-10 mb-6">
              <div>
                <p className="text-2xl font-semibold">{t.learners}</p>
                <p className="text-gray-600 text-sm">Total Learners</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">{t.courses}</p>
                <p className="text-gray-600 text-sm">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">{t.liveClasses}</p>
                <p className="text-gray-600 text-sm">Live Classes</p>
              </div>
            </div> */}
            <p className=" text-lg italic mb-4 mt-5">“{t.quote}”</p>
            <div>
              {/* <p className="font-semibold">{t.name}</p> */}
              <p className="">{t.title}</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 relative p-4 flex items-center justify-center">
            <img
              src={t.img}
              alt="ISKCON Portal Screenshot"
              className="rounded-2xl shadow-xl w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialISKCON;
