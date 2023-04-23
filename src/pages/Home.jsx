import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import About from '../components/About/About'
import Total from '../components/Total/Total'
import Pricing from '../components/Pricing/Pricing'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div className="container hero-image"></div>
                <HeroSection />
                <About />
                <Total />
                <Pricing />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home