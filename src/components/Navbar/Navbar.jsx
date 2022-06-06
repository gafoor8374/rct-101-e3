import React, { useContext } from "react";
import {Link, Navigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {count} = useContext( CartContext )
  const {isAuth,logout,handleLogin} =useContext( AuthContext ) 
  return(
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/login">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">Count:{count}</span>
      <button data-cy="navbar-login-logout-button"
      onClick={()=>{
        if(isAuth){
          logout()
        }
        else{
handleLogin()
        }
      }}
      >{ isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
