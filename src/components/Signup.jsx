import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userData, setUserData] = useState({
        userName: "", email: "", password: ""
    });

    const navigate = useNavigate();
    // console.log("useNavigate", useNavigate());

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(event.target.value);
        setUserData({
            ...userData,
            // [event.target.name]: event.target.value
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(userData);

        axios.post("http://localhost:5000/users", userData)
            .then(() => {
                console.log("user data sent to server");
                toast.success("data sent successfully");
                setUserData({ userName: "", email: "", password: "" });
                navigate('/login');
            }).catch((err) => {
                console.err("failed to send data", err);
                toast.error("signup fail")
            })
    }
    return (
        <div >
            <form onSubmit={handleSubmit}
                className='flex flex-col justify-center items-center mt-28 border 1px'>
                <label htmlFor="userName" className='text-lg font-bold'>User Name:</label>
                <input className='text-lg bg-slate-100 rounded-md m-2 pl-2 text-center'
                    type="text"
                    placeholder='Enter your name'
                    id='userName'
                    name='userName'
                    required
                    value={userData.userName}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email" className='text-lg font-bold'>Email:</label>
                <input className='text-lg bg-slate-100 rounded-md m-2 pl-2 text-center'
                    type="email"
                    placeholder='Enter your email'
                    id='email'
                    name='email'
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password" className='text-lg font-bold'>Password:</label>
                <input className='text-lg bg-slate-100 rounded-md m-2 pl-2 text-center'
                    type="password"
                    placeholder='Enter your password'
                    id='password'
                    name='password'
                    required
                    value={userData.password}
                    onChange={handleChange}
                />
                <button className='px-2 py-1 bg-green-600 rounded-lg
                 text-lg font-bold hover:font-bold hover:bg-green-800'>Signup</button>
            </form>
        </div>
    )
}

export default SignUp