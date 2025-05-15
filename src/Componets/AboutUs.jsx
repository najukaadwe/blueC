// src/components/HeroSection.jsx

import React from 'react';
import communiy from "../assets/allimg/communiy.png"; // Adjust the path as necessary
import business from "../assets/allimg/business.png"; // Adjust the path as necessary
import hr from "../assets/allimg/hr.png"; // Adjust the path as necessary
import listing from "../assets/allimg/listing.png"; // Adjust the path as necessary
import Mission from './Mission';
import Comp7 from "./Comp7"

const AboutUs = () => {
    return (
        <>
             <div className="bg-black py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-white">
    <div className="flex flex-wrap">
        {/* Left Text Section - Half Width on Large Screens */}
        <div className="w-full lg:w-1/2">
            <p className="text-blue-700 font-semibold text-xl mb-6">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                The Solution for All Needs. Businesses to Individuals.
            </h1>

            <h1 className="text-lg font-bold mb-3">
                The Solution for All Needs. Businesses to Individuals.
            </h1>
            <p className="text-lg mb-6 max-w-2xl">
                BlueCS Limited,. is a public limited company offering consultancy services across finance, business strategy, and social media marketing. Founded in 2022 from a simple conversation, it began as a hiring portal and has since grown into a multifaceted support system for growth and innovation.
            </p>

            <p className="text-lg mb-6 max-w-2xl font-bold">
                To further this vision, BlueCS Limited., developed BlueEra, an app designed to simplify and strengthen local connections.
            </p>

            <h1 className="text-2xl font-bold mb-6">
                12+ Work Professional Experience
            </h1>
        </div>

        {/* Right Stats Section - Full Width */}
        <div className="w-full mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="flex justify-center mb-4">
                    <img
                        src={business}
                        alt="Business Discovery"
                        className="rounded-xl shadow-lg h-[100px] w-[100px]"
                    />
                </div>
                <h3 className="text-xl font-semibold">Business Discovery</h3>
                <p>Users can find local businesses listed with BlueEra within a set radius, complete with descriptions, locations, and contact details.</p>
            </div>

            <div>
                <div className="flex justify-center mb-4">
                    <img
                        src={communiy}
                        alt="Community Building"
                        className="rounded-xl shadow-lg h-[100px] w-[100px]"
                    />
                </div>
                <h3 className="text-xl font-semibold">Community Building & Networking</h3>
                <p>Create or join interest-based communities to connect, engage, and collaborate. Plus, Businesses can connect for partnerships, supplies, or joint ventures.</p>
            </div>

            <div>
                <div className="flex justify-center mb-4">
                    <img
                        src={hr}
                        alt="Job & Hiring Services"
                        className="rounded-xl shadow-lg h-[100px] w-[100px]"
                    />
                </div>
                <h3 className="text-xl font-semibold">Job & Hiring Services</h3>
                <p>Individuals can discover job opportunities, while businesses can post openings and find talent locally.</p>
            </div>

            <div>
                <div className="flex justify-center mb-4">
                    <img
                        src={listing}
                        alt="Product & Service Listings"
                        className="rounded-xl shadow-lg h-[100px] w-[100px]"
                    />
                </div>
                <h3 className="text-xl font-semibold">Product & Service Listings</h3>
                <p>Businesses can showcase both products and services to expand their reach.</p>
            </div>
        </div>
    </div>
</div>
  <Mission/>
  <Comp7/>
        </>

      


    );
};

export default AboutUs;
