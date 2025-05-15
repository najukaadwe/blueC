import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import img12 from "../assets/img12.png"; // Adjust the path as necessary

const Comp11 = () => {
    const features = [
        "Scheduled delivery with Drip Content feature",
        "Live sessions with discussion forums",
        "In-built auto alerts",
        "User-friendly & intuitive interface",
    ];

    return (
        <section className="text-[#ffffff] bg-[#0a070b] py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    // viewport={{ once: true }}
                >
                    <div className="mb-3">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-md">
                            Communicate efficiently
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Enhance learner engagement & retention
                    </h2>
                    <p className="mb-6 text-lg">
                        Make the most of e-learning by fostering deeper connections, and watch retention rates soar. Transform your teaching approach for the modern age by ensuring every learner is captivated, committed, and coming back for more.
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                                <span className="font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image / Demo section */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                // Removed `once: true` to allow re-triggering
                >

                    <img
                        src={img12}
                        alt="Knowledge Delivery Demo"
                        className="rounded-xl shadow-lg max-w-full w-[500px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Comp11;
