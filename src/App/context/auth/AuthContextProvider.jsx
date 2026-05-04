import { useState } from "react";
import AuthContext from "./auth.context";
import { loginApi } from "../../../api/loginApi";

const AuthProvider =({children})=>{
    const [token,setToken] = useState(localStorage.getItem('token') || null)
    
    const login = async (userData) => {
        const data= await loginApi.getToken(userData)
        const newToken= data?.token
        if (newToken){
            setToken(newToken)
            localStorage.setItem('token', newToken)
            return {message:'token recived and stored succesfully'}

        }
        else{
            return {message:'token request failed'}

        }
        
        

  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }
    return (<AuthContext.Provider value={{token, login, logout}}>
        {children}
    </AuthContext.Provider>)

}

export default AuthProvider