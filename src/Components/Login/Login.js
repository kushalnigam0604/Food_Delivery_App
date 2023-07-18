import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginCard">
        <h2>Login Page</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>Email - food@gmail.com</p>
        <p>Password - food</p>
      </div>
    </div>
  );
};

export default Login;
