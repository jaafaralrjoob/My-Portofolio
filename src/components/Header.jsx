import React from "react";
import { Link } from "react-scroll";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-primary px-3 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-nowrap text-2xl font-bold">Jaafar Alrjoob</div>

        <nav className="hidden space-x-1 sm:flex sm:space-x-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-blue-500"
          >
            Technologies
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>
        <span className="flex items-center sm:hidden">
          <MobileMenu />
        </span>
      </div>
    </header>
  );
};

export default Header;
