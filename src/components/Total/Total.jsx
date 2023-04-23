import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
import { Box } from '@mui/system'
import { Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import { TotalData } from '../Data'
import './Total.css'

const Total = () => {

    return (
        <>
            <Box className='hello' sx={{ position: 'relative', width: '100vw', height: { xs: '160px', md: '200px' }, padding: 0 }}>
                <div className="img"></div>
                <Stack direction={'row'} height={'100%'} padding={'8px'}>
                    {TotalData.map((item, index) => (
                        <Stack key={index} direction={'column'} sx={{ flex: 1, color: 'white' }} alignItems={'center'} justifyContent={'center'}>
                            <Typography id='counter' sx={{ fontSize: { xs: '40px', md: '90px' } }}>

                                {/* to enable counter while the element comes in view use enableScrollSpy,scrollSpyDelay */}
                                {/*if you want to delay then use the prop: scrollSpyDelay={1000} */}

                                <CountUp end={item.count} duration={2} enableScrollSpy={true} />
                            </Typography>

                            <Typography sx={{ fontSize: { xs: '18px', md: '26px' }, letterSpacing: '1.1px', fontFamily: 'Cera-light', textAlign: 'center' }}>
                                {item.subject}
                            </Typography>
                        </Stack>
                    ))
                    }
                </Stack>
            </Box>
        </>
    )
}

export default Total