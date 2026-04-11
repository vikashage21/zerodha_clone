import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    // handel form
    const [userDetails, setUsersDetails] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState('')

    // handelInput
    const handelInput = (e) => {
        const { name, value } = e.target;

        setUsersDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })

    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        // regex defined
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        // check the password and email is there are not 
        if (!userDetails.name && !userDetails.password) {
            setError('please fill the required filed')
            // checking the password length should be min 8
        } else if (!emailRegex.test(userDetails.email)) {
            setError("Invalid Email");
        } else if (!passwordRegex.test(userDetails.password)) {
            setError("Weak Password");
        } else {

            try {
                const res = await axios.post("http://localhost:3002/login",
                    userDetails
                )

               
                // console.log(  res.response.data.message)

                if (res) {
                    toast.success(res?.data?.message)
                    localStorage.setItem("token", res.data.token);

                    window.location.href = "http://localhost:3001"; // redirect to login
                }



            } catch (error) {

                console.log(error)
                toast.warn(error.response.data.message)

            }

            // post details to backend



        }

    }
    return (
        <div className=' p-5'>
            <ToastContainer />

            <div className="row text-center ">
                <h1 className='fs-4'>
                    Open a free demat and trading account online
                </h1>
                <h2 className="fs-6">
                    Start investing brokerage free and join a community of 1.6+ crore investors and traders
                </h2>
            </div>

            <div className=' m-5 p-5 text-center border w-50 m-auto mt-5' >
                <h1 className='fs-6 mb-5'>login form </h1>


                <form c className='w-50 m-auto d-flex flex-column justify-content-center align-content-center' onSubmit={handleSubmit}>
                    <label htmlFor="email" className='mb-2'>
                        email :
                    </label>
                    <input type="text" onChange={handelInput} name='email' className="form-control" placeholder='enter your email' />
                    <br />
                    <label htmlFor="password " className='mb-2'>
                        password :
                    </label>
                    <input type="password" onChange={handelInput} required className="form-control" placeholder='enter your password' name='password' />
                    <button className='btn btn-primary mt-5'>login </button>
                </form>

                <div className='mt-2 text-danger'>
                    {
                        error
                    }
                </div>
            </div>


        </div>
    )
}

export default Login
