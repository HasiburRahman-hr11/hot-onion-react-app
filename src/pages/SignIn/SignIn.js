import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useLocation, useHistory } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const { googleSignIn, setUser , setError , error } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

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

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            });
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
                    <form action="" onSubmit={handleSignIn}>
                        <Box component="div" className="input_group">
                            <Box
                                component="input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box component="div" className="input_group">
                            <Box
                                component="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Box>


                        <Box component="div" className="input_group">
                            <Box component="button" type="submit" className="btn btn_primary">
                                {loading ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '25px !important',
                                    height: '25px !important'
                                }} /> : 'Sign In'}
                            </Box>
                        </Box>
                        {error.message && <p className="form_error" style={{textAlign:'center'}}>Wrong email or password provided!</p>}
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