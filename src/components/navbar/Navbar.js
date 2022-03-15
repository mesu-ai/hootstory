import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" height='52.23px' />
            <p className='header-font'>Hootstory</p>
            
        </div>
    );
};

export default Navbar;