import React from 'react'
import './Nav.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiWolfHowl } from "react-icons/gi";

const Nav = () => {
  return (
    <div className='__nav'>
        <GiWolfHowl className='__wolflogo'/>

      
    <ul className='__navlinks'>
        <li><a href="/Hero">Home</a></li>
        <li><a href="/table">table</a></li>
        <li><a href="/table">Greywolf🐺</a></li>
    </ul>
       
    </div>
  )
}

export default Nav