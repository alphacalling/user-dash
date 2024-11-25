import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers, deleteUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/users";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.list);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        dispatch(setUsers(response.data));
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch(deleteUser(id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleEdit = (userId) => {
    navigate(`/update/${userId}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
          >
            <div>
              <h3 className="font-semibold">{user.userName}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(user.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
