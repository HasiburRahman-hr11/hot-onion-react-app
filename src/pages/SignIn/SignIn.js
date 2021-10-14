import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, useLocation , useHistory } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { googleSignIn, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                const path = location.state?.from.pathname || '/';
                history.push(path);
            })
            .catch(error => {
                setError(error);
            })
    }
    return (
        <Box component="div" className="signin"
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
                            <Box component="input" type="email" placeholder="Email" name="email" required />
                        </Box>
                        <Box component="div" className="input_group">
                            <Box component="input" type="password" placeholder="Password" name="password" required />
                        </Box>


                        <Box component="div" className="input_group">
                            <Box component="button" type="submit" className="btn btn_primary">Sign In</Box>
                        </Box>
                    </form>


                    <Box component="p" sx={{
                        margin: '20px 0',
                        textAlign: 'center',
                        color: '#888',
                        fontWeight: '600'
                    }}>OR</Box>

                    <Box component="div" className="input_group">
                        <Box
                            component="button"
                            type="button"
                            className="btn btn_google btn_primary"
                            onClick={handleGoogleSignIn}>
                            <GoogleIcon />
                            <Box component="span" sx={{ marginLeft: '10px' }}>Sign In with Google</Box>
                        </Box>
                    </Box>
                    <Box component="p" sx={{
                        fontSize: '15px',
                        color: 'var(--primary-color)',
                        textAlign: 'center'
                    }}><Link to="signup">Create my account</Link></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SignIn;