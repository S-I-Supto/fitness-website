import { Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Stack sx={{ background: 'linear-gradient(313.78deg, #1B1A1A 31.22%, #272727 83.17%);', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <Typography className='footer-text' sx={{ textAlign: 'center', fontSize: { xs: '18px', md: '24px' }, color: '#fff' }}>Designed and developed by ❤️ Supto</Typography>
        </Stack>
    )
}

export default Footer