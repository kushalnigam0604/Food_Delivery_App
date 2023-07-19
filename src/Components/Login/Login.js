import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Utils/Redux/userSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.item)

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin])

  function checkUserLogin() {
    if (email === "food@gmail.com" && password === "food") {
      dispatch(userLogin());
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login">
      <div className="loginCard">
        <h2>Login Page</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => checkUserLogin()}>Login</button>
        <p>Email - food@gmail.com</p>
        <p>Password - food</p>
      </div>
    </div>
  );
};

export default Login;
