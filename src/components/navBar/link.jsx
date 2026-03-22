import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='z-10 border-b-2 border-gray-300 hover:bg-amber-200 hover:font-semibold duration-500 text-center px-1 md:px-0 md:border-0 md:hover:bg-transparent'><a href={route.href}>{route.label}</a></li>
    );
};

export default Link;