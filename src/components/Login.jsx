import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [fetchedUser, setFetchedUser] = useState(null);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  }

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await axios.get("http://localhost:5000/users");
      console.log("api", data);
      setFetchedUser(data);
    };
    fetchApi();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!loginUser.email || !loginUser.password) {
      toast.error("Please enter both email and password");
      return;
    }

    const authUser = fetchedUser?.find((user) => {
      return (
        user.email === loginUser.email && user.password === loginUser.password
      );
    });

    if (authUser) {
      toast.success(`Welcome ${authUser.userName}`);
      sessionStorage.setItem("id", authUser.id);
      navigate("/");
    } else {
      toast.error("Sorry, user not found");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>

        <label htmlFor="email" className="text-lg font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your Email"
          onChange={handleChange}
          value={loginUser.email}
          className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label
          htmlFor="password"
          className="text-lg font-semibold text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Enter your Password"
          onChange={handleChange}
          value={loginUser.password}
          className="w-full text-lg bg-slate-100 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
