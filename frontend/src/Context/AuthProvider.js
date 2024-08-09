import React, { createContext, useContext, useState } from 'react'
export const AuthContext =createContext();
// children means all the component app.js,navbar,etc
const AuthProvider = ({children}) => {
    const userlogindata = localStorage.getItem("users");
    const [LoginUserData , setLoginUserData] = useState(
        userlogindata?JSON.parse(userlogindata):undefined
    )
  return (
    <AuthContext.Provider value={[LoginUserData,setLoginUserData]}>
      {children}
    </AuthContext.Provider>
  )
}
export const useUserinPage = () => useContext(AuthContext);
// this is for use user data in page 
export default AuthProvider
// for locatstorgae data use in page