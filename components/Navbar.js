import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-green-500 shadow-lg font-bold text-white">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Link legacyBehavior href="/">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 lg:absolute">
            <a class="ml-3 text-2xl font-bold">THE EYE REMEDY</a>
          </a>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-lg">
          <Link legacyBehavior href="/" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">HOME</a>
          </Link>
          <Link legacyBehavior href="/disease" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">EYE DISEASE</a>
          </Link>
          <Link legacyBehavior href="/info" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">EYE INFO</a>
          </Link>
          <Link legacyBehavior href="/about" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">ABOUT US</a>
          </Link>
          <Link legacyBehavior href="/contact" className="py-4 border-b-4 font-semibold">
            <a className="mr-5 hover:underline hover:animate-pulse">CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;