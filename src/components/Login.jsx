import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: "", password: ""
    });

    const [fetchedUser, setFetchedUser] = useState(null);
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;

        setLoginUser({
            ...loginUser,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        const fetchApi = async () => {

            const { data } = await axios.get("http://localhost:5000/users");
            console.log("api", data);
            setFetchedUser(data);
        }
        fetchApi();
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e);

        if (!loginUser.email || !loginUser.password) {
            toast.error("Please enter both email and password");
            return;
        }

        // user available ?
        const authUser = fetchedUser?.find((user) => {
            console.log("authUser", user);
            return user.email === loginUser.email &&
                user.password === loginUser.password;
        });
        if (authUser) {
            toast.success(`Welcome ${authUser.userName}`);

            const id = sessionStorage.setItem("id", authUser.id);
            console.log(id);
            navigate('/')
        } else {
            toast.error("sorry user not found");
        }
    }
    return (
        <div >
            <form onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center mt-28 border 1px'>
                <label htmlFor="email" className='text-lg font-bold'>Email</label>
                <input type="email"
                    name='email'
                    id='email'
                    required
                    placeholder='Enter your Email'
                    onChange={handleChange}
                    value={loginUser.email}
                    className='text-lg bg-slate-100 rounded-md m-2 pl-2 text-center'
                />
                <br />
                <label htmlFor="password" className='text-lg font-bold'>Password</label>
                <input type="password"
                    name='password'
                    id='password'
                    placeholder='Enter your Password'
                    required
                    value={loginUser.password}
                    onChange={handleChange}
                    className='text-lg bg-slate-100 rounded-md m-2 pl-2 text-center'
                />
                <br />
                <button className='px-2 py-1 bg-green-500 rounded-lg
                text-lg font-bold hover:font-bold hover:bg-green-800'>Login</button>
            </form>
        </div>
    )
}

export default Login;