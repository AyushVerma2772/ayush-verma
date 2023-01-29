import React, { useState } from 'react';
import '../styles/navbar.css';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <nav className="d-flex navbar">
                <a href='/' className="link logo">
                    <span>{'<AyushVerma />'}</span>
                </a>

                <ul className={`d-flex menu ${openNav ? 'open' : ''}`} onClick={e => setOpenNav(!openNav)}>
                    <li className="menu-item">
                        <Link className="link menu-link" to="home" spy={true} smooth={true} offset={-70} duration={500} >{'// Home'}</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="link menu-link" to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={e => setOpenNav(!openNav)}>{'// About'}</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="link menu-link" to="skills" spy={true} smooth={true} offset={-70} duration={500} onClick={e => setOpenNav(!openNav)}>{'// Skills'}</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="link menu-link" to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={e => setOpenNav(!openNav)}>{'// Projects'}</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="link menu-link" to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={e => setOpenNav(!openNav)}>{'// Contact'}</Link>
                    </li>
                </ul>

                <div className="ham-burger" onClick={e => setOpenNav(!openNav)}>
                    {
                        openNav ? <RiCloseFill className='icon' /> : <RiMenu4Fill className='icon' />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar