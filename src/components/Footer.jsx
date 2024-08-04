// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto text-center">
        <h3 className="mb-4 text-2xl font-bold">Connect with Me</h3>
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://github.com/jaafaralrjoob"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:opacity-80"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jaafar-alrjoob"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:opacity-80"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p className="mb-2 text-lg">
          Email:{" "}
          <a href="mailto:jaafar.alrjoob@gmail.com" className="underline">
            {"jaafar.alrjoob@gmail.com"}
          </a>
        </p>
        <p className="text-lg">
          Phone:{" "}
          <a href="tel:+1234567890" className="underline">
            {"+970592231150"}
          </a>
        </p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Jaafar Alrjoob. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
