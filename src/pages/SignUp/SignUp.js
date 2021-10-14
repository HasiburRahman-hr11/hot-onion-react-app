import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <Box component="div" className="signup" 
        sx={{
            minHeight: 'calc(100vh - 100px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container fixed>
                <Box component="div" sx={{
                    maxWidth: '370px',
                    margin: '0 auto'
                }}>
                    <form action="">
                        <Box component="div" className="input_group">
                            <Box component="input" type="text" placeholder="Name" name="name" />
                        </Box>
                        <Box component="div" className="input_group">
                            <Box component="input" type="email" placeholder="Email" name="email" />
                        </Box>
                        <Box component="div" className="input_group">
                            <Box component="input" type="password" placeholder="Password" name="password" />
                        </Box>
                        <Box component="div" className="input_group">
                            <Box component="input" type="password" placeholder="Confirm Password" name="password" />
                        </Box>

                        <Box component="div" className="input_group">
                            <Box component="button" type="submit" className="btn btn_primary">Sign Up</Box>
                        </Box>
                    </form>
                    <Box component="p" sx={{
                        fontSize:'15px',
                        color:'var(--primary-color)',
                        textAlign:'center'
                    }}><Link to="signin">Already have an account</Link></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SignUp;