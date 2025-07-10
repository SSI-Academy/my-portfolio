import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-open-sans min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 shadow-md">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link href="#home" className="text-lg font-medium hover:text-blue-400 transition-colors">Home</Link>
          <Link href="#about" className="text-lg font-medium hover:text-blue-400 transition-colors">About</Link>
          <Link href="#portfolio" className="text-lg font-medium hover:text-blue-400 transition-colors">Portfolio</Link>
          <Link href="#contact" className="text-lg font-medium hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-white font-poppins">
            Hi, I'm <span className="text-blue-400">Nama Anda</span>
          </h1>
          <p className="text-3xl md:text-4xl font-light text-gray-300 mb-8 font-open-sans">
            A passionate <span className="font-medium text-blue-300">Web Developer</span> & <span className="font-medium text-blue-300">UI/UX Designer</span>
          </p>
          <Link href="#portfolio" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg font-poppins">
            View My Work
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-white mb-12 text-center font-poppins">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="https://via.placeholder.com/400x250/334155/94a3b8?text=Project+1" alt="Project 1" className="w-full h-60 object-cover" />
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
              <img src="https://via.placeholder.com/400x250/334155/94a3b8?text=Project+2" alt="Project 2" className="w-full h-60 object-cover" />
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
              <img src="https://via.placeholder.com/400x250/334155/94a3b8?text=Project+3" alt="Project 3" className="w-full h-60 object-cover" />
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
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <a href="mailto:your.email@example.com" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg font-poppins">
            Email Me
          </a>
          <div className="mt-10 flex justify-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins">Twitter</a>
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