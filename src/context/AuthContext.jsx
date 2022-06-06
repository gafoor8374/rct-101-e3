import axios from "axios";
import React, { createContext,useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

const initState={
  email:"",
  password:"",
}
export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false);
  const [text,setText] = useState(initState);

  const {email,password} = text;
  
  const handleChange =(e)=>{
    const {name,value}=e.target;
    setText({
      ...text,
      [name]:value
    })
  }

  const handleLogin=(e)=>{
    e.preventDefault();
    axios.post("https://reqres.in/api/login",{
      email,
      password
    }).then((res)=>{
      console.log(res.data)
      setIsAuth(true)
    })
  }
  const logout = ()=>{
    <Navigate to={"/login"} />
    setIsAuth(false)
  }
  return <AuthContext.Provider
  value={{isAuth,handleChange,handleLogin,logout}}>{children}</AuthContext.Provider>;
};
