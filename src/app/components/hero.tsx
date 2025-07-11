import Image from 'next/image';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
          width={192}
          height={192}
        />
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-white font-poppins">
          Hi, I&apos;m <span className="text-blue-400">Nama Anda</span>
        </h1>
        <p className="text-3xl md:text-4xl font-light text-gray-300 mb-8 font-open-sans">
          A passionate{' '}
          <span className="font-medium text-blue-300">Web Developer</span> &{' '}
          <span className="font-medium text-blue-300">UI/UX Designer</span>
        </p>
        <Link
          href="#contact"
          className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 shadow-lg font-poppins items-center justify-center"
        >
          Hire Me <FaFire className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
