import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> GymLance</h1>
        </div>
    );
};

export default Header;