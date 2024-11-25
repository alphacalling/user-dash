import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", userData)
      .then(() => {
        toast.success("Sign up successful");
        setUserData({ userName: "", email: "", password: "" });
        navigate("/login");
      })
      .catch((err) => {
        console.error("Failed to send data", err);
        toast.error("Signup failed");
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign Up
        </h2>

        <label
          htmlFor="userName"
          className="text-lg font-semibold text-gray-700"
        >
          User Name
        </label>
        <input
          className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your name"
          id="userName"
          name="userName"
          required
          value={userData.userName}
          onChange={handleChange}
        />

        <label htmlFor="email" className="text-lg font-semibold text-gray-700">
          Email
        </label>
        <input
          className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          required
          value={userData.email}
          onChange={handleChange}
        />

        <label
          htmlFor="password"
          className="text-lg font-semibold text-gray-700"
        >
          Password
        </label>
        <input
          className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          required
          value={userData.password}
          onChange={handleChange}
        />

        <button className="w-full py-2 mt-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
