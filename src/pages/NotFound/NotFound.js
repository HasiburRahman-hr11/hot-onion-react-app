import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import errorImg from '../../images/404-2.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
    return (
        <Box component="div" className="not_found" sx={{ marginTop: '50px' }}>
            <Container>
                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box component="div">
                        <Box
                            component="img"
                            src={errorImg}
                            alt="Page Not Found"
                            sx={{ maxWidth: '500px', display: 'block', marginBottom: '30px' }}
                        />
                        <Link to="/" className="btn btn_primary btn_rounded" style={{
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: '120px',
                            justifyContent: 'center',
                            margin: '0 auto'
                        }}>
                            <HomeIcon />
                            <Box component="span" sx={{ marginLeft: '5px' }} >Home</Box>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NotFound;