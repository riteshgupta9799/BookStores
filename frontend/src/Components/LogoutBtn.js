import React from 'react'
import { useUserinPage } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
    let navigate = useNavigate();
    const [userlogin ,setuserlogindata]= useUserinPage();
    const handlelogout = () => {
        try {
                setuserlogindata({...userlogin,user:null})
                localStorage.removeItem("users");
                toast.success("logut success")
                setTimeout(() => {

                    window.location.reload();
                 

                },2000);
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div>
    <button className='px-3 py-1 bg-red-500 rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default LogoutBtn
