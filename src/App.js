import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../src/Componets/Header.jsx';
import img1 from './assets/allimg/img1.png';
import Comp3 from './Componets/Comp3.jsx';
import Comp4 from './Componets/Comp4.jsx';
import Comp6 from './Componets/Comp6.jsx';
import Comp7 from './Componets/Comp7.jsx';
import Comp9 from './Componets/Comp9.jsx';
import Comp10 from './Componets/Comp10.jsx';
import Service from './Componets/Service.jsx';
import Service2 from './Componets/Service2.jsx';
import AboutUs from './Componets/AboutUs.jsx';
import Service3 from './Componets/Service3.jsx';
import Service4 from './Componets/Service4.jsx';

const Home = () => (
  <>


    <section className="bg-[#0a070b] text-white py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-end">
      {/* Left Content */}
      <div className="space-y-14">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="bg-blue-600 px-2 py-1 rounded text-[#ffffff] mr-2">Welcome to </span>
          BlueCS Limited
        </h1>
        <p className="text-gray-300 text-lg">
          Deliver training programs, convert insights into profit, and build
          lasting learner loyalty—all under your brand.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          Unlock Smarter Growth. Contact BlueCS Limited and discover how we can transform your journey
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 relative flex justify-center">
        <img src={img1} alt="Business Woman" className=" " />
      </div>
    </section>

    <Comp3 />
    <Comp4 />
    <Service />
    <Service2 />
    <Service3 />
    <Service4/>
    <Comp10 />
    <Comp9 />

    <Comp7 />

  </>
);

const About = () => <h2 className="text-white text-center py-20">About Page</h2>;
const Services = () => <h2 className="text-white text-center py-20">Services Page</h2>;

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/aboutus" element={<About />} />
    //     {/* <Route path="/services" element={<Services />} /> */}
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <Comp6 />
    </>


  );
};

export default App;
