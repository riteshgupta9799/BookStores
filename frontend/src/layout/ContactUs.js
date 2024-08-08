import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
                <Navbar />

            
                <div className=''>
                    <div className='mt-28 flex flex-wrap items-center justify-center text-balance text-center'>
                    <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Contact Us!</h3>
                        {/* Name */}
                        <div className='mt-4 space-y-2'>

                            <span>Name</span>
                            <br />
                            <input type="text" placeholder='enter name' className='w-80 px-3 py-1 rounded-md border outline-none' />
                            <br />
                        </div>
                        {/* email */}
                        <div className='mt-4 space-y-2'>

                            <span>Email</span>
                            <br />
                            <input type="text" placeholder='enter email' className='w-80 px-3 py-1 rounded-md border outline-none'/>
                            <br />
                        </div>
                        {/* password */}
                        <div className='mt-4 space-y-2'>

                            <span>Message</span>
                            <br />
                            <textarea type="text"  placeholder='enter message' className=' w-80 px-3 py-1 rounded-md border outline-none'  />
                            <br />
                        </div>
                        {/* button */}
                        <div className='flex justify-left mt-4'>
                            <button className='bg-blue-500 rounded-md hover:bg-pink-700 px-3 py-1 text-white'>Submit</button>
                           
                        </div>
                        </form>
                    </div>
                </div>
        
        </>
    )
}

export default ContactUs
