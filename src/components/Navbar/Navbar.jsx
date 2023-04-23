import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
const Navbar = () => {

    const [scrollYValue, setscrollYValue] = useState(null)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setscrollYValue(scrollPosition)
    };
    const toggleMenu = () => {
        setstatement(!statement)
    }
    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [statement, setstatement] = useState(false)
    return (
        <>
            <div className={`content flex`} style={{ backgroundColor: `${scrollYValue > 0 ? 'black' : ''}` }}>
                <div className="left-side flex">
                    <div className="logo TT-extraBold-italic">FitClub</div>
                    <ul className={`nav-items flex ${statement ? "active" : ''}`}>
                        <li className='nav-item'><a onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}>Home</a></li>
                        <li className='nav-item'><Link className='link' to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li className='nav-item'><Link className='link' to='pricing' spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
                        <li className='nav-item'><Link className='link' to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </div>
                <div className="right-side nav-menu flex" onClick={toggleMenu}><i className={`hamburger bx ${statement ? 'bx-x' : "bx-menu-alt-right"} `}></i></div>
            </div>
        </>
    )
}

export default Navbar