import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import bike from '../../images/bike.png';
import rider from '../../images/rider.png';

const OrderComplete = () => {
    return (
        <Box component="div" className="order_complete" sx={{marginTop:'50px'}}>
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid item
                        md={8}
                        xs={12}
                    >
                        <Box component="div" className="map_wrapper" sx={{
                            paddingRight: { lg: '100px', md: '60px' }
                        }}>
                            <Box component="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.00395835521!2d90.4296737722957!3d23.71162336158088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634208467089!5m2!1sen!2sbd" allowFullScreen loading="lazy" title="map" sx={{
                                border: 0,
                                width: '100%',
                                minHeight: {lg:'500px', md: '400px', xs: '250' },
                                borderRadius: '7px'
                            }}></Box>
                        </Box>
                    </Grid>
                    <Grid item
                        md={4}
                        xs={12}
                    >
                        <Box component="div" className="address_wrapper" sx={{
                            backgroundColor: '#F5F5F5',
                            padding: '20px 10px',
                            borderRadius: '7px'
                        }}>
                            <Box component="img" src={bike} alt="bike" sx={{
                                display: 'inline-block',
                                maxWidth: '100px',
                                marginBottom: '9px',
                                marginLeft:'40px'
                            }} />
                            <Box component="div" className="location_wrapper" sx={{
                                backgroundColor: '#fff',
                                padding: '10px'
                            }}>
                                <Box component="div" className="location_item" sx={{
                                    paddingBottom: '30px'
                                }}>
                                    <Box component="h4">Your Location</Box>
                                    <Box component="p">107 Road No 8</Box>
                                </Box>
                                <Box component="div" className="location_item">
                                    <Box component="h4">Shop Address</Box>
                                    <Box component="p">Gulshan Plaza Restaurant</Box>
                                </Box>
                            </Box>


                            <Box component="h2" sx={{
                                fontSize:'30px',
                                marginTop:'20px',
                                fontWeight:'500'
                            }}>
                                09:30
                            </Box>
                            <Box component="p" sx={{
                                fontSize:'14px',
                            }}>
                                Estimated Delivery Time
                            </Box>

                            <Box component="div" sx={{
                                display:'flex',
                                alignItems:'center',
                                padding:'10px',
                                backgroundColor:'#fff',
                                marginTop:'10px'
                            }}>
                                <Box component="img" src={rider} sx={{
                                    maxWidth:'80px'
                                }} />
                                <Box component="div" sx={{marginLeft:'15px'}}>
                                    <Box component="h4">Hamim</Box>
                                    <Box component="p" sx={{
                                        fontSize:'12px'
                                    }}>Your rider</Box>
                                </Box>
                            </Box>


                            <Box component="button" className="btn btn_primary" sx={{
                                width: '100%',
                                display: 'block',
                                marginTop:'30px'
                            }}>Contact</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OrderComplete;