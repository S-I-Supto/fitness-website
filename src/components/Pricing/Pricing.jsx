import React from 'react'
import { Box, Stack } from '@mui/system';
import { PricingData } from '../Data'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './Pricing.css'



const Pricing = () => {
    const pricingStyle = {
        textAlign: "center",
        position: "relative",
        fontFamily: "Montserrat",
        fontStyle: "italic",
        color: 'white',
        borderRadius: '2px',
        fontSize: { xs: '30px', md: '54px' },
        letterSpacing: "0.11em",
        marginTop: "5px"
    };
    return (
        <>
            <Stack id='pricing' alignItems={'center'} direction={'column'} gap={{ xs: '70px', md: '90px' }} sx={{ width: '100vw', minHeight: '650px', background: 'linear-gradient(313.78deg, #1B1A1A 31.22%, #272727 83.17%);', padding: '10px' }}>
                <Stack display={'flex'} flexDirection={"column"}>
                    <Typography sx={pricingStyle}> Program  <span style={{ fontWeight: "bold" }}>Pricing</span> </Typography>
                    {/* <div style={{ width: "300px", position: "relative", margin: "0 auto", marginTop: "5px", height: "3px", background: "#FC1503" }}></div> */}
                    <Box sx={{ width: { xs: '300px', md: "600px" }, marginTop: "5px", height: "3px", background: "#FC1503" }}></Box>
                </Stack>

                <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'start', lg: 'center' }} flexWrap={'wrap'} gap={{ xs: '10px', md: '18px', lg: '35px' }} padding={'10px'}>
                    {PricingData.map((item, index) => (
                        <Box key={index} padding={'35px 15px'} width={{ lg: '330px', md: '300px', xs: '330px' }} minHeight={'350px'} sx={{ background: 'black', color: 'white', borderTop: '2px solid #"#FC1503"' }}>
                            <Box>
                                <Typography textAlign={'center'} sx={{ fontFamily: 'Montserrat', fontSize: '30px', fontWeight: '700', letterSpacing: '0.04em' }}>{item.plan}</Typography>
                            </Box>
                            <Box mt={'10px'}>
                                <Typography textAlign={'center'} sx={{ fontFamily: 'Montserrat' }}>{item.pricing}</Typography>
                            </Box>
                            <Box mt={'18px'}>
                                <Typography textAlign={'center'} fontFamily={'Montserrat'}> All gym equipment and guide from expert trainer.</Typography>
                            </Box>
                            <Stack direction={'column'} gap={'18px'} marginTop={'18px'}>
                                {item.services.map((item, index) => (
                                    <Stack direction={'row'} alignItems={'center'} key={index} gap={'18px'} fontFamily={'Cera-light'}>
                                        {item.icon ? <FiberManualRecordIcon fontSize={'6px'} sx={{ fontWeight: 700, color: '#FC1503' }} /> : <FiberManualRecordIcon fontSize={'6px'} sx={{ fontWeight: 700, color: '#746D6D' }} />}
                                        <Typography sx={{ fontSize: '15px', letterSpacing: '0.05em', fontFamily: 'Montserrat' }}>{item.name}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                            <Box mt={'51px'}>
                                <Button
                                    sx={item.border ? { width: '100%', height: '60px', fontSize: '22px', color: 'white', borderRadius: '0px', border: '2px solid #FC1503', fontFamily: 'Montserrat', fontStyle: "italic", letterSpacing: '0.11em', "&:hover": { background: '#FC1503' } } : { width: '100%', height: '60px', fontSize: '22px', color: 'white', borderRadius: '0px', background: '#FC1503', transition: 'all 0.3s ease', "&:hover": { background: '#CD1300' }, fontFamily: 'Montserrat', fontStyle: "italic", letterSpacing: '0.11em' }}
                                >
                                    Purchase
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Stack>

            </Stack>
        </>
    )
}

export default Pricing