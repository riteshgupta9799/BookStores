import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


const SignUp = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userinfo = {
            email: data.email,
            name: data.name,
            password: data.password,
        }
        await axios.post("http://localhost:4001/api/singup", userinfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    
                    toast.success('signup Done!');
                    navigate("/login");
                }
                localStorage.setItem("users", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.message);
                 
                }

            });
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen'>

                <div className='w-[600px]'>
                    <div className="">
                        <div className='modal-box'>

                            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                                <h3 className="font-bold text-lg">SignUp!</h3>
                                {/* Name */}
                                <div className='mt-4 space-y-2'>

                                    <span>Name</span>
                                    <br />
                                    <input type="text" placeholder='enter name' className='w-80 px-3 py-1 rounded-md border outline-none' {...register("name", { required: true })} />
                                    <br />
                                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* email */}
                                <div className='mt-4 space-y-2'>

                                    <span>Email</span>
                                    <br />
                                    <input type="text" placeholder='enter email' className='w-80 px-3 py-1 rounded-md border outline-none' {...register("email", { required: true })} />
                                    <br />
                                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* password */}
                                <div className='mt-4 space-y-2'>

                                    <span>Password</span>
                                    <br />
                                    <input type="password" placeholder='enter password' className='w-80 px-3 py-1 rounded-md border outline-none' {...register("password", { required: true })} />
                                    <br />
                                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* button */}
                                <div className='flex justify-around mt-4'>
                                    <button className='bg-pink-500 rounded-md hover:bg-pink-700 px-3 py-1 text-white'>SignUp</button>
                                    <p>Have Account!{" "} <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
                                    <Login />
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
