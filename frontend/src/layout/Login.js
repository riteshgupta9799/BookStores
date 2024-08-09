import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userinfo = {
            email: data.email,

            password: data.password,
        }
        await axios.post("http://localhost:4001/api/login", userinfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Loggedin Successfully!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {

                        window.location.reload();
                        localStorage.setItem("users", JSON.stringify(res.data.user));

                    },1000);
                }
            }).catch((err) => {
                if (err.response) {

                    toast.error(err.response.data.message);
                }

            });
    }
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                            <h3 className="font-bold text-lg">Login!</h3>
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
                                <input type="password" placeholder='enter password' className='w-80 px-3 rounded-md border outline-none' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 rounded-md hover:bg-pink-700 px-3 py-1 text-white'>Login</button>
                                <p>Not Registered!{" "} <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
