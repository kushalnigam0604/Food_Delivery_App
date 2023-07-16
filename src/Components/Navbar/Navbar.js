import React from 'react';
import './Navbar.css';
import main_logo from '../../assets/main_logo.jpg';
import {BiLogIn} from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logoDiv">
        <img src={main_logo} alt="" />
      </div>
      <div className="rightDiv">
        <span className='rightDivSpan'>Home</span>
        <span className='rightDivSpan'>About</span>
        <span className='rightDivSpan'>Contact</span>
        <span className='rightDivSpan'>Login <BiLogIn/></span>
      </div>
    </div>
  )
}

export default Navbar
