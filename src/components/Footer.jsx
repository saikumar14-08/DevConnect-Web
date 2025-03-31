import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/privacypolicy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/tandc" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link to="/cancellation" className="hover:text-white transition">
            Cancellation & Refund
          </Link>
          <Link to="/delivery" className="hover:text-white transition">
            Shipping & Delivery
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact Us
          </Link>
        </nav>
        <nav className="flex gap-4">
          <a
            href="https://github.com/saikumar14-08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.386.6.111.79-.26.79-.58v-2.15c-3.338.727-4.04-1.612-4.04-1.612-.548-1.396-1.338-1.766-1.338-1.766-1.092-.747.083-.732.083-.732 1.209.085 1.842 1.244 1.842 1.244 1.073 1.836 2.813 1.303 3.5.996.108-.777.42-1.303.764-1.603-2.665-.303-5.465-1.332-5.465-5.923 0-1.308.467-2.382 1.239-3.221-.124-.303-.537-1.518.118-3.165 0 0 1.017-.325 3.334 1.236.97-.269 2.005-.405 3.036-.408 1.03.003 2.065.139 3.035.408 2.318-1.561 3.335-1.236 3.335-1.236.655 1.647.242 2.862.118 3.165.773.839 1.239 1.913 1.239 3.221 0 4.601-2.801 5.619-5.467 5.923.426.363.817 1.078.817 2.169v3.228c0 .319.19.692.79.58 4.77-1.586 8.208-6.083 8.208-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sai-boreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
