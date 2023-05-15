import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { Link } from 'react-scroll'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
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
                    <div className='logo'>FitClub</div>
                    <ul className={`nav-items flex ${statement ? "active" : ''}`}>
                        <li className='nav-item'><a onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: "smooth",
                            });
                            setstatement(false)
                        }}>Home</a></li>
                        <li className='nav-item'><Link onClick={() => { setstatement(false) }} className='link' to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li className='nav-item'><Link onClick={() => { setstatement(false) }} className='link' to='pricing' spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
                        <li className='nav-item'><Link onClick={() => { setstatement(false) }} className='link' to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </div>
                <div className="right-side nav-menu flex" onClick={toggleMenu}>{!statement ? <BiMenuAltRight className='hamburger' /> : <AiOutlineClose className='hamburger' />}</div>

            </div>
        </>
    )
}

export default Navbar