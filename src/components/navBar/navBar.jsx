import React from 'react';

const NavBar = () => {
    return (
        <nav className='p-5'>
            <ul className='flex justify-between'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;