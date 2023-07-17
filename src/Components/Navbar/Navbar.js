import React from "react";
import "./Navbar.css";
import main_logo from "../../assets/main_logo.jpg";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoDiv">
        <Link to="/">
          <img src={main_logo} alt="" />
        </Link>
      </div>
      <div className="rightDiv">
        <Link to="/">
          <span className="rightDivSpan">Home</span>
        </Link>
        <Link to="/cart">
          <span className="rightDivSpan">Cart</span>
        </Link>
        <Link to="/login">
          <span className="rightDivSpan">
            Login <BiLogIn />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
