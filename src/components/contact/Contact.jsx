import React from 'react'
import './contact.css'
import { Stack, Typography } from '@mui/material'
const Contact = () => {
    return (
        <Stack id='contact' sx={{ width: '100vw', minHeight: '95px', background: 'black' }}>
            <Typography color={'white'} sx={{ textAlign: 'center', pt: { xs: '14px', md: "20px", lg: '25px' }, fontFamily: 'Cera-light', fontSize: { xs: '23px', lg: '40px' } }}>For more information please <span className='red-text TT-bold-italic'> Contact Us</span></Typography>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: '14px', md: "20px" }, pb: { xs: '20px', md: "29px" } }}>
                <button className='contact-button'> <a href="mailto:shefatislam1946@gmail.com">Contact</a></button>
            </Stack>
        </Stack>
    )

}

export default Contact