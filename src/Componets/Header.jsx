import { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiInfo,         // About Us
  FiBriefcase,    // BlueCS Consultancy
  FiBookOpen,     // Blog
  FiPhone,
} from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/allimg/logo.png"; // adjust path as needed
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="relative bg-black text-white flex items-center justify-between px-36 py-3">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img
          src={logo}
          alt="ISKCON Portal Screenshot"
          className="rounded-2xl shadow-xl w-40 h-20 object-contain"
        />
      </div>

      {/* Search Bar */}
       <div className="flex items-center bg-white rounded-full w-full max-w-xl shadow px-4">
        <div className="text-blue-600 mr-2">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="How to become a project manager"
          className="flex-1 py-3 text-blue-600 placeholder-blue-600 outline-none bg-white"
        />
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full">
          Search
        </button>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4 relative" ref={menuRef}>
        <div className="flex items-center border border-blue-600 rounded-full px-4 py-2 text-sm">
          <span className="font-semibold">Download App</span>
          <div className="ml-2 text-xs text-white/80 leading-tight">
            Access the network and get exclusive benefits
          </div>
        </div>

    

        {/* HiMenu Icon */}
        <button
          className="text-white text-2xl relative"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HiMenu />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && <MenuC open={menuOpen} setOpen={setMenuOpen} />}
      </div>
    </header>
  );
}

// Menu Component
const MenuC = ({ open, setOpen }) => {
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="absolute top-full -right-48 z-50 mt-3"
    >
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl w-48 overflow-hidden"
      >
         <nav>
               <Link to="/">
          <Option setOpen={setOpen} Icon={FiInfo} text="Home" />
        </Link>
          </nav>
          <nav>
               <Link to="/aboutus">
          <Option setOpen={setOpen} Icon={FiInfo} text="About Us" />
        </Link>
          </nav>
          
     

        <Option setOpen={setOpen} Icon={FiBriefcase} text="BlueCS Consultancy" />
        <Option setOpen={setOpen} Icon={FiBookOpen} text="Blog" />
        <Option setOpen={setOpen} Icon={FiPhone} text="Contact Us" />
      </motion.ul>
    </motion.div>
  );
};

// Option Component
const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

// Animation Variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
