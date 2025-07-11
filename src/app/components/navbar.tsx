import Link from 'next/link';
import { useState } from 'react';
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
  FaUser,
} from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-0">
        {/* Logo/Nama di Kiri (opsional, bisa ditambahkan) */}
        <div className="text-2xl font-bold text-white font-poppins md:hidden">
          Nama Anda
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8 w-full">
          <Link
            href="#home"
            className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaUser className="mr-2" />
            About
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaCode className="mr-2" />
            Skills
          </Link>
          <Link
            href="#portfolio"
            className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaBriefcase className="mr-2" />
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Conditional) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm py-4 mt-4 space-y-4 px-6">
          <Link
            href="#home"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            href="#about"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaUser className="mr-2" />
            About
          </Link>
          <Link
            href="#skills"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaCode className="mr-2" />
            Skills
          </Link>
          <Link
            href="#portfolio"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaBriefcase className="mr-2" />
            Portfolio
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
