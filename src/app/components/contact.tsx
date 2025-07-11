import {
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-800">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-5xl font-bold text-white mb-12 font-poppins">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-8 font-open-sans">
          Have a project in mind or just want to say hello? Feel free to reach
          out using the form below.
        </p>
        <form className="w-full max-w-lg mx-auto text-left">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-300 text-lg font-semibold mb-2 font-poppins"
            >
              Name
            </label>
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
            <label
              htmlFor="email"
              className="block text-gray-300 text-lg font-semibold mb-2 font-poppins"
            >
              Email
            </label>
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
            <label
              htmlFor="message"
              className="block text-gray-300 text-lg font-semibold mb-2 font-poppins"
            >
              Message
            </label>
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
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"
          >
            <FaLinkedinIn className="mr-2" />
            LinkedIn
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors text-2xl font-poppins flex items-center"
          >
            <FaTwitter className="mr-2" />
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
