import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Stack sx={{ padding: "0 20px", background: 'linear-gradient(313.78deg, #1B1A1A 31.22%, #272727 83.17%);', minHeight: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <Typography className='footer-text' sx={{ textAlign: 'center', fontSize: { xs: '18px', md: '24px' }, color: '#fff', fontFamily: "sans-serif" }}>Designed and developed by ❤️ Supto</Typography>
            <a href="mailto:sisuptodhaka5402@gmail.com" style={{ color: "white", fontSize: "20px", fontFamily: "Montserrat", paddingBottom: "10px", textDecoration: "underline", opacity: "0.8" }}>contact me</a>
        </Stack>
    )
}

export default Footer