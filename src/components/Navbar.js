import React from 'react';
import logo from '../assets/Frame 427319709.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='nav-ul1'>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <img src={logo} />
            <ul className='nav-ul2'>
                <li>Sign Up</li>
                <li><button className='login-btn'>Login</button></li>
            </ul>
        </div>
    )
}

export default Navbar;