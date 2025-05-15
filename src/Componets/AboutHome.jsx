// src/components/HeroSection.jsx

import React from 'react';
import communiy from "../assets/allimg/communiy.png"; // Adjust the path as necessary
import business from "../assets/allimg/business.png"; // Adjust the path as necessary
import hr from "../assets/allimg/hr.png"; // Adjust the path as necessary


const AboutHome = () => {
    return (
        <div className="bg-black py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-white">
            <div className="max-w-7xl mx-auto">
                <p className="text-blue-700 font-semibold text-lg mb-2">About Us</p>
                <h1 className="text-4xl sm:text-5xl font-bold  mb-6">
                    The Solution for All Needs. Businesses to Individuals.
                </h1>

           
                <p className=" text-lg mb-6">
                   We help you weather today’s uncertainty through our best team intelligence and needs.
                </p>

             

                <h1 className="text-2xl font-bold  mb-6">
                    12+ Work Professional Experience
                </h1>



            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="flex justify-center mb-4">
                        <div className=" p-4 rounded-xl">
                            <img
                                src={business}
                                alt="White Label Platform"
                                className="rounded-xl shadow-lg h-[50px] w-[100px]"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold">Innovative ideas
                    </h3>
                   
                </div>

                <div>
                    <div className="flex justify-center mb-4">
                        <div className=" p-4 rounded-xl">
                            <img
                                src={communiy}
                                alt="White Label Platform"
                                className="rounded-xl shadow-lg h-[50px] w-[100px]"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold">Professional assistance
                    </h3>
                   
                </div>

                <div>
                    <div className="flex justify-center mb-4">
                        <div className=" p-4 rounded-xl">
                            <img
                                src={hr}
                                alt="White Label Platform"
                                className="rounded-xl shadow-lg h-[50px] w-[100px]"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold">Financial advisory
                    </h3>
                    
                </div>

             
            </div>
        </div>
    );
};

export default AboutHome;
