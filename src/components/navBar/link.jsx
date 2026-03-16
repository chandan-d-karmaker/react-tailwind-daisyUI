import React from 'react';

const Link = ({ route }) => {
    return (
        <li><a href={route.href}>{route.label}</a></li>
    );
};

export default Link;