import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../Assets/mmb-logo.png'
import menu_icon from '../../Assets/menu-icon.png'
import { Link } from "react-scroll";


const Navbar = ()=>{

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return(
        <nav className={`container ${sticky? 'dark-nav': ''}`}>
            <img src={logo} alt="" className="logo"/>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-50} duration={500}>About</Link></li>
                <li><Link to='innovator' smooth={true} offset={-150} duration={500}>Innovator</Link></li>
                <li><Link to='products' smooth={true} offset={-100} duration={500}>Products</Link></li>
                <li><Link to="contact" smooth={true} offset={-250} duration={500}><button className="btn"><a href="#contact">Contact Us</a></button></Link></li>
            </ul>
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar;