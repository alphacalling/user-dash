import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { updateUser } from "../utils/userSlice";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/users";

const UpdateUser = () => {
  // id
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/${userId}`);

        setFormData({
          userName: response.data.userName || "",
          email: response.data.email || "",
          password: "",
        });
      } catch (error) {
        console.error("Failed to fetch:", error);
        toast.error("Failed to fetch user.");
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/${userId}`, formData);
      dispatch(updateUser(response.data));
      toast.success("User updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 w-full max-w-md rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update User
        </h2>

        <div>
          <label htmlFor="userName" className="block text-gray-700 mb-2">
            User Name
          </label>
          <input
            required
            type="text"
            id="userName"
            name="userName"
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
