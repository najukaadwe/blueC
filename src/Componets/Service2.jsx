import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import img5 from "../assets/allimg/img5.png";

const Service2 = () => {
  const profiles = [
    {
      title: "🧑 Personal Profile",
      bestFor: "Ideal for job seekers and customers",
      features: [
        "Apply for jobs & track applications",
        "Browse products & place orders",
        "Manage personal info & preferences",
      ],
    },
    {
      title: "🧑‍💼 Business Profile",
      bestFor: "Perfect for companies, sellers, and recruiters",
      features: [
        "Post jobs & manage applicants",
        "List products & track orders",
        "Access dashboards & analytics",
      ],
    },
  ];

  return (
    <section className="text-white bg-[#0a070b] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img5}
            alt="Profile Options"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Profile</h2>
          {profiles.map((profile, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-semibold mb-1">{profile.title}</h3>
              <p className="text-gray-400 mb-2">{profile.bestFor}</p>
              <ul className="space-y-1">
                {profile.features.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service2;
