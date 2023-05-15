import React from 'react'
import { Stack } from '@mui/system'
import { Box, Typography, Button } from '@mui/material'
import { motion } from "framer-motion";
import { leftStyle, Parent } from '../motion';
import './HeroSection.css'
const HeroSection = () => {

    const styles = {
        padding: { xs: '10px', md: '10px 13px', lg: '13px 25px' },
        background: '#FC1503',
        color: 'white',
        borderRadius: '2px',
        fontSize: { xs: '17px', lg: '22px' },
        fontStyle: "italic",
        fontWeight: "500",
        fontFamily: 'Montserrat',
        letterSpacing: '1.1px',
        "&:hover": {
            boxShadow: 8,
            background: '#A93226',

        },
    };
    return (
        <Box component={motion.div} variants={Parent} initial='hidden' animate='show' sx={{ width: '100vw', height: '67vh', marginTop: '220px', padding: { md: '0px 30px', xs: '0px 13px', } }}>

            <Typography component={motion.p} variants={leftStyle} sx={{ fontFamily: 'Montserrat', fontStyle: "italic", fontSize: { md: '39px', xs: '28px' }, color: 'white', lineHeight: '161%', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '21px', textAlign: { xs: 'center', md: 'left' } }}>
                Get <span className='red-text'>Fit</span>  and <span className='red-text'>Feel Great</span>  with  Our <br /> <span className='red-text'>Customized Workout Plans.</span>
            </Typography>
            <Typography component={motion.p} variants={leftStyle} sx={{ fontSize: { xs: '14px', md: '17px' }, fontFamily: "Poppins", fontWeight: "400", letterSpacing: '0.1em', color: 'white', textAlign: { xs: 'center', md: 'left' }, marginBottom: '36px' }}>Get fit on your own terms with our on-demand workout. </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button component={motion.div} variants={leftStyle} sx={styles}>
                    Join now
                </Button>
            </Box>
        </Box>
    )
}

export default HeroSection