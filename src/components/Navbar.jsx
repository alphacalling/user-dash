import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-600 py-2">
      <ul className="flex justify-around items-center text-xl font-sans font-semibold">
        <Link to="/" aria-label="Home">
          <li className="hover:underline text-white">Home</li>
        </Link>
        <Link to="/login" aria-label="Log In">
          <li className="bg-white text-sky-600 p-2 hover:bg-sky-500 hover:text-white rounded-xl transition duration-300 ease-in-out cursor-pointer">
            LogIn
          </li>
        </Link>
        <Link to="/signup" aria-label="Sign Up">
          <li className="bg-white text-sky-600 p-2 hover:bg-sky-500 hover:text-white rounded-xl transition duration-300 ease-in-out cursor-pointer">
            SignUp
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
