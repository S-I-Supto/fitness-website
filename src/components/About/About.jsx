import React from 'react'
import { motion } from 'framer-motion'
import { Parent, leftStyle, rightStyle } from '../motion'
import { Box } from '@mui/system'
import { Stack } from '@mui/system'
import AboutImg from '../../assets/Images/Aboutimg.png'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import './About.css'

const About = () => {
    const styles = {
        padding: '10px 25px',
        background: '#FC1503',
        color: 'white',
        borderRadius: '2px',
        fontSize: { xs: '22px', lg: '22px' },
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontStyle: "italic",
        letterSpacing: "0.11em",
        "&:hover": {
            boxShadow: 8,
            background: '#A93226',

        },
    };
    return (
        <Box id='about' sx={{ minHeight: '750px', width: '100vw', bgcolor: '#000000', color: 'white', }} >
            <Stack
                component={motion.div}
                variants={Parent}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                direction={{ lg: 'row', xs: 'column' }} gap={{ md: '75px', xs: '30px' }} justifyContent={'center'} alignItems={{ lg: 'start', xs: 'center' }} margin={'100px 0 50px 0'} padding={{ xs: '0 30px', md: '0 40px' }}>
                <Box
                    component={motion.div} variants={leftStyle}
                    sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img className='AboutImg' src={AboutImg} alt="" />
                </Box>
                <Box
                    component={motion.div} variants={rightStyle}
                    width={{ xs: '80vw', lg: '626px' }}
                    textAlign={{ xs: 'center', lg: 'start' }}

                >
                    <Typography sx={{ fontSize: { xs: '30px', md: '34px' }, fontFamily: 'Montserrat', fontStyle: "italic", fontWeight: 700, lineHeight: '60px', letterSpacing: '0.05em', }}><span className='red-color-text'> Are you </span> ready <span className='red-color-text'> to take </span> one step <span className='red-color-text'>  to
                        take your </span> desired body <span className='red-color-text'> into </span>
                        reality <span className='red-color-text'>?</span></Typography>
                    <Typography sx={{ fontSize: '15px', marginTop: '35px', letterSpacing: '0.05em', fontFamily: 'Poppins', fontWeight: "500" }}>Our team of fitness experts and enthusiasts are dedicated to helping you achieve your health and fitness goals, no matter what your current level of fitness may be. <br /><br />
                        We offer a wide range of resources and information to help you get started on your fitness journey. Whether you're looking to lose weight, build muscle, improve your cardiovascular health, or just want to feel better and more energized, we've got you covered.
                    </Typography>
                    <Box marginTop={'39px'} sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                        <Button sx={styles}>
                            Join
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box >
    )
}

export default About