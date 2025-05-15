import React from 'react';
import logo from "../assets/allimg/logo.png"; // Adjust the path

const Footer = () => {
  return (
    <footer className="text-white bg-[#0a070b] py-16 px-6 md:px-12 border-t ">
      <div className="mx-auto grid grid-cols-3 gap-8 text-sm max-w-7xl justify-center">
        {/* Brand & Contact Info */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="h-10 w-40" />
          <div>
            <strong>Call Us</strong>
            <p>+91-9405051565</p>
          </div>
          <div>
            <strong>E-mail Us</strong>
            <p>info@bluecs.in</p>
          </div>
          <div>
            <strong>Office</strong>
            <p> India</p> {/* Add real address here */}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-600">Features</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
