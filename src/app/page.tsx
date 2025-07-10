'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaFire, FaPaperPlane } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-open-sans min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-0">
          {/* Logo/Nama di Kiri (opsional, bisa ditambahkan) */}
          <div className="text-2xl font-bold text-white font-poppins md:hidden">Nama Anda</div>

          {/* Hamburger Menu Button (Mobile) */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8 w-full">
            <Link href="#home" className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaHome className="mr-2" />Home</Link>
            <Link href="#about" className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaUser className="mr-2" />About</Link>
            <Link href="#skills" className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaCode className="mr-2" />Skills</Link>
            <Link href="#portfolio" className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaBriefcase className="mr-2" />Portfolio</Link>
            <Link href="#contact" className="text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaEnvelope className="mr-2" />Contact</Link>
          </div>
        </div>

        {/* Mobile Menu (Conditional) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm py-4 mt-4 space-y-4 px-6">
            <Link href="#home" onClick={closeMenu} className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaHome className="mr-2" />Home</Link>
            <Link href="#about" onClick={closeMenu} className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaUser className="mr-2" />About</Link>
            <Link href="#skills" onClick={closeMenu} className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaCode className="mr-2" />Skills</Link>
            <Link href="#portfolio" onClick={closeMenu} className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaBriefcase className="mr-2" />Portfolio</Link>
            <Link href="#contact" onClick={closeMenu} className="block text-lg font-medium hover:text-blue-400 transition-colors flex items-center"><FaEnvelope className="mr-2" />Contact</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/profile.jpg" alt="Profile Picture"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
            width={192}
            height={192} />
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-white font-poppins">
            Hi, I'm <span className="text-blue-400">Nama Anda</span>
          </h1>
          <p className="text-3xl md:text-4xl font-light text-gray-300 mb-8 font-open-sans">
            A passionate <span className="font-medium text-blue-300">Web Developer</span> & <span className="font-medium text-blue-300">UI/UX Designer</span>
          </p>
          <Link href="#contact" className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg font-poppins items-center justify-center">
            Hire Me <FaFire className="ml-2" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-12 font-poppins">About Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6 font-open-sans">
            I'm a dedicated web developer with a keen eye for design and user experience. My journey in web development began with a fascination for how digital products can solve real-world problems and enhance daily life.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed font-open-sans">
            With expertise in modern web technologies like React, Next.js, and Tailwind CSS, I strive to build robust, scalable, and aesthetically pleasing applications. I believe in clean code, efficient workflows, and continuous learning to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-bold text-white mb-12 font-poppins">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Frontend Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[280px] max-w-[400px]">
              <h3 className="text-3xl font-bold text-blue-400 mb-6 font-poppins">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />React.js</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Next.js</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Tailwind CSS</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />JavaScript (ES6+)</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />TypeScript</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />HTML5</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />CSS3</span>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[280px] max-w-[400px]">
              <h3 className="text-3xl font-bold text-blue-400 mb-6 font-poppins">Backend</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Node.js</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Express.js</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Python</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Firebase</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />MongoDB</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />PostgreSQL</span>
              </div>
            </div>

            {/* Tools & Others Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[280px] max-w-[400px]">
              <h3 className="text-3xl font-bold text-blue-400 mb-6 font-poppins">Tools & Others</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Git & GitHub</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />VS Code</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Figma</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Responsive Design</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />UI/UX Principles</span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-lg font-medium border border-gray-600 flex items-center"><BsDot className="text-blue-400 mr-1" />Agile Methodologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-white mb-12 text-center font-poppins">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/images/projects/1.jpg"
                  alt="Project 1"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  fill />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4 font-open-sans">
                  A full-stack e-commerce solution with secure payment integration and a responsive design.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold font-poppins">View Details &rarr;</a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/images/projects/2.jpg"
                  alt="Project 1"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  fill />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Task Management App</h3>
                <p className="text-gray-300 mb-4 font-open-sans">
                  An intuitive task management application with real-time collaboration features.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold font-poppins">View Details &rarr;</a>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image
                  src="/images/projects/3.jpg"
                  alt="Project 1"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  fill />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-poppins">Personal Portfolio Site</h3>
                <p className="text-gray-300 mb-4 font-open-sans">
                  A responsive and modern personal portfolio website showcasing my design and development skills.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold font-poppins">View Details &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-800">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-white mb-12 font-poppins">Get In Touch</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-open-sans">
            Have a project in mind or just want to say hello? Feel free to reach out using the form below.
          </p>
          <form className="w-full max-w-lg mx-auto text-left">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-lg font-semibold mb-2 font-poppins">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-open-sans"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-lg font-semibold mb-2 font-poppins">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-open-sans"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-lg font-semibold mb-2 font-poppins">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-open-sans"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg font-poppins focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 items-center justify-center mx-auto"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:flex-row">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"><FaLinkedinIn className="mr-2" />LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"><FaGithub className="mr-2" />GitHub</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"><FaTwitter className="mr-2" />Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8 text-center text-sm font-open-sans">
        <div className="container mx-auto px-6">
          <p>&copy; 2025 Nama Anda. All rights reserved.</p>
          <p className="mt-2">Designed and Developed with &#x2764;&#xfe0f; and Next.js</p>
        </div>
      </footer>
    </div>
  );
}
