import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from './link';

const basicNavItems = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'About Us', href: '/about' },
  { id: 3, label: 'Services', href: '/services' },
  { id: 4, label: 'Blog', href: '/blog' },
  { id: 5, label: 'Contact', href: '/contact' }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const Links = basicNavItems.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className='p-5 flex justify-between items-center'>
            <span className='flex gap-2' onClick={()=> setOpen(!open)}>

                {open? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden duration-700 ${open? 'top-14': '-top-40'} absolute text-black bg-amber-100 p-2 rounded-sm`}>
                    {Links}
                </ul>

                <h3>My NavBar</h3>
            </span>

            <ul className='md:flex hidden gap-5 l'>
                {
                    Links
                }
            </ul>
            <button className='btn'>Login</button>
        </nav>
    );
};

export default NavBar;