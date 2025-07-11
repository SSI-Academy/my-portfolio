'use client';

import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-open-sans min-h-screen">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}
