import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {Products} from "../components/Products/Products"

const Login = () => {
  const { handleLogin, isAuth, handleChange } = useContext(AuthContext);
  return !isAuth ? (
    <div>
      <form onSubmit={handleLogin}>
        <input
          data-cy="login-email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          type="email"
        />
        <br />
        <input
          data-cy="login-password"
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button data-cy="login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  ):(
    <Navigate to={"/products"} />
  )
};

export default Login;
