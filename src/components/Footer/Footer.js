import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#191919',
                padding: '50px 0',
                marginTop:'50px'
            }}
        >
            <Container fixed>
                <Box component="div" className="footer_top">
                    <Grid container spacing={5}>
                        <Grid
                            item
                            md={6}
                            sm={12}
                        >
                            <Link to="/"><Box component="img" src={logo} alt="Logo" sx={{ maxWidth: '120px' }} /></Link>
                        </Grid>

                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Box component="ul" className="footer_list" sx={{ color: '#ddd' }}>
                                <Box component="li">
                                    <Link to="#">About online food</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">Read our blog</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">Sign up to deliver</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">Add your restaurant</Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Box component="ul" className="footer_list" sx={{ color: '#ddd' }}>
                                <Box component="li">
                                    <Link to="#">Get help</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">Read FAQs</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">View all cities</Link>
                                </Box>
                                <Box component="li">
                                    <Link to="#">Restaurants near me</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box component="div" className="footer_bottom" sx={{marginTop:'60px'}}>
                    <Grid container spacing={4}>
                        <Grid item sm={6} xs={12}>
                            <Box component="p" sx={{ fontSize: '12px', color: '#696969' }}>Copyright &copy; {new Date().getFullYear()} Online food</Box>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Box component="ul" className="footer_list footer_bottom_list"
                                sx={{
                                    display: { md: 'flex', xs: 'block' },
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    color:'#fff'
                                }}>
                                <Box component="li" sx={{marginLeft:{md:'15px'}}}>
                                    <Link to="#">Privacy Policy</Link>
                                </Box>
                                <Box component="li" sx={{marginLeft:{md:'15px'}}}>
                                    <Link to="#">Terms of Use</Link>
                                </Box>
                                <Box component="li" sx={{marginLeft:{md:'15px'}}}>
                                    <Link to="#">Pricing</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;