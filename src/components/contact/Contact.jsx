import React from 'react'
import './contact.css'
import { Button, Stack, Typography } from '@mui/material'
const Contact = () => {
    return (
        <Stack id='contact' sx={{ width: '100vw', minHeight: '95px', background: 'black' }}>
            <Typography color={'white'} sx={{ textAlign: 'center', pt: { xs: '14px', md: "20px", lg: '25px' }, fontFamily: 'Montserrat', fontSize: { xs: '23px', lg: '40px' } }}>For more information please <span className='red-text'> Contact Us</span></Typography>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: '14px', md: "20px" }, pb: { xs: '20px', md: "29px" } }}>
                <button className='contact-button'> Contact</button>
            </Stack>
        </Stack>
    )

}

export default Contact