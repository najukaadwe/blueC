// src/components/LocationSection.jsx

import React from 'react';
import vission from "../assets/allimg/vission.png"; // Adjust the path as necessary
// import officeImage from '../assets/office-meeting.jpg'; // Replace with your actual image path

const Mission = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center gap-12 text-white">
            {/* Left Side */}
            <div className="flex-1">
                <p className="text-blue-600 font-semibold mb-2">Mission & Vision</p>
                <h2 className="text-2xl  font-bold  mb-6">
                    Our Motto– My People. My City. Hence My Business Thrives.

                </h2>

                <h2 className="text-2xl  font-bold  mb-6">


                    Our Mission– Revitalize Local Economies
                </h2>
                <p className=" text-lg mb-6">
                    Vision: We Connect; We Resolve; We Build; is the guiding principle that shapes every aspect of our platform and services. We are committed to transforming the local business landscape and empowering communities through a comprehensive digital ecosystem. Here’s how we bring this vision to life:
                </p>

                <p className=" text-lg mb-6">
  We Build:    A robust digital infrastructure that allows businesses to thrive. By enabling the businesses to display detailed profiles with names, descriptions, locations, and contact information. We empower businesses to expand their reach and tell their unique stories to a broader audience.
                </p>

                <p className=" text-lg mb-6">
  We Connect:   We drive to foster meaningful connections. We bridge the gap between local businesses and their customers, employers and job seekers. Additionally, we facilitate the creation of vibrant communities that promote networking, collaboration, and engagement, enriching the ecosystem for both individuals and enterprises.
                </p>

                <p className=" text-lg mb-6">
  We Resolve:   We recognize the challenges that local businesses face and are committed to providing effective solutions. From marketing and promotional support to direct employment services.
                </p>

            </div>

            {/* Right Side */}
            <div className="flex-1">
                <img
                    src={vission}
                    alt="Office Meeting"
                    className="rounded-xl shadow-md w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Mission;
