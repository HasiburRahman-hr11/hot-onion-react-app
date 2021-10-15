import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {
    const { setError } = useAuth();
    const auth = getAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false);


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Please confirm your password ')
            .oneOf([Yup.ref('password')], 'Passwords do not match')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    const onSubmit = data => {
        // console.log(data);
        setLoading(true)
        handleFirebaseSignUp(data);

    };


    const handleFirebaseSignUp = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                updateUsersProfile(data);
                setLoading(false)
                history.push('/signin')
            })
            .catch((error) => {
                setLoading(false)
                console.log(error);
                setError(error);
            });
    }

    const updateUsersProfile = (data) => {
        updateProfile(auth.currentUser, {
            displayName: data.name
        }).then(() => {
            console.log('Profile Updated')
        }).catch((error) => {
            console.log(error);
            setError(error);
        });
    }

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
                    <form action="" onSubmit={e => e.preventDefault()}>
                        <Box component="div" className="input_group">
                            <input

                                type="text"
                                placeholder="Name"
                                name="name"
                                // onChange={handleChange}
                                // value={formData.name}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="form_error">Name is required</p>}
                        </Box>
                        <Box component="div" className="input_group">
                            <input

                                type="email"
                                placeholder="Email"
                                name="email"
                                // onChange={handleChange}
                                // value={formData.email}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="form_error">Email is required</p>}
                        </Box>
                        <Box component="div" className="input_group">
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                {...register('password')}
                            />
                            {errors.password && <p className="form_error">{errors.password.message}</p>}
                        </Box>
                        <Box component="div" className="input_group">
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && <p className="form_error">{errors.confirmPassword.message}</p>}
                        </Box>

                        <Box component="div" className="input_group">
                            <Box component="button" type="submit" className="btn btn_primary" onClick={handleSubmit(onSubmit)}>
                                {loading ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '25px !important',
                                    height: '25px !important'
                                }} /> : 'Sign Up'}
                            </Box>
                        </Box>
                    </form>
                    <Box component="p" sx={{
                        fontSize: '15px',
                        color: 'var(--primary-color)',
                        textAlign: 'center'
                    }}><Link to="signin">Already have an account</Link></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SignUp;