import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import logo from '../../images/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user , signOutControl } = useAuth();
    const { carts } = useContext(CartContext)
    const cartItems = carts?.reduce((p, c) => p + c.quantity, 0);

    const handleSignOut = () =>{
        signOutControl()
    }

    return (
        <Box
            component="header"
            sx={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff'
            }}
        >
            <Container fixed>
                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Box
                            component="div"
                            className="header_logo"
                        >
                            <Link to="/">
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="Logo"
                                    className="logo"
                                    sx={{ maxWidth: '120px' }}
                                />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                    >
                        <Box
                            component="ul"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            className="header_menu"
                        >
                            <Box component="li" sx={{ marginLeft: '20px', position: 'relative' , paddingTop:'5px' }}>
                                <Link to="/checkout">
                                    <AddShoppingCartIcon />
                                </Link>
                                <Box component="span" sx={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '-10px',
                                    backgroundColor: 'var(--primary-color)',
                                    width: '17px',
                                    height: '17px',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px'
                                }}>{cartItems}</Box>
                            </Box>
                            <Box component="li" sx={{ marginLeft: '20px' }}>
                                {user.displayName || user.email ? (
                                    <Box component="button" className="btn btn_primary btn_rounded" onClick={handleSignOut}>
                                        Sign Out
                                    </Box>
                                ) : (
                                    <Link to="/signin" className="btn btn_primary btn_rounded">
                                        Sign In
                                    </Link>
                                )}

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;