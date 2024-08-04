import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-primary fixed top-0 z-50 w-full p-1 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold">Jaafar Alrjoob</div>
        <nav className="space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
