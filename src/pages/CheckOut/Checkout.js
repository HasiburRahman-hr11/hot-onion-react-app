import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useCartFoods from '../../hooks/useCartFoods';
import { CartContext } from '../../context/CartContext';
import { successNotify } from '../../utils/tostify'
import { getOldCart } from '../../utils/cartHandler';
import useAuth from '../../hooks/useAuth';

const Checkout = () => {

    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user.displayName ? user.displayName : '',
        address: '',
        city: '',
        flat: '',
        deliveryNote: ''
    });
    const history = useHistory();


    const { carts, setCarts } = useContext(CartContext);
    const [cartFoods] = useCartFoods();

    const cartItems = cartFoods.reduce((p, c) => p + c.quantity, 0);
    const subtotal = cartFoods.reduce((p, c) => p + c.price * c.quantity, 0);
    const shipping = 10;
    const tax = (subtotal + shipping) * 10 / 100
    const total = subtotal + shipping + tax

    const handleQtyIncrement = (prevQty, index) => {
        const value = prevQty;
        const cloneProducts = [...carts];

        cloneProducts[index].quantity = value + 1;

        setCarts(cloneProducts);

        localStorage.setItem('hot-onion', JSON.stringify(carts));
        successNotify('Cart Updated Successfully.')
    }
    const handleQtyDecrement = (prevQty, index) => {
        const value = prevQty;
        const cloneProducts = [...carts];
        const valueInt = parseInt(value);

        if (valueInt > 1) {
            cloneProducts[index].quantity = value - 1;
            setCarts(cloneProducts);
        }

        setCarts(cloneProducts);
        localStorage.setItem('hot-onion', JSON.stringify(carts));
        successNotify('Cart Updated Successfully.')
    }
    const qtyChangeHandler = (event, index) => {
        const value = event.target.value;
        const valueInt = parseInt(value);
        const cloneProducts = [...carts];

        if (value === "") {
            cloneProducts[index].quantity = 1;
        } else {
            cloneProducts[index].quantity = valueInt;
        }
        setCarts(cloneProducts);
    }

    const handleRemoveCart = (food) => {
        const updatedCart = carts.filter(item => item._id !== food._id);
        localStorage.setItem('hot-onion', JSON.stringify(updatedCart));
        const newCarts = getOldCart();
        setCarts(newCarts);
        successNotify('Item Removed From Cart.')
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.address && formData.city) {
            history.push('/complete');

            localStorage.removeItem('hot-onion');
            const newCarts = getOldCart();
            setCarts(newCarts);
            successNotify('Order received successfully')
        }
    }

    return (
        <Box component="div" className="checkout" sx={{ padding: '50px 0' }}>
            <Container fixed>
                <form action="" onSubmit={handleSubmit}>
                    <Grid container spacing={5}>
                        <Grid item md={6} xs={12} sx={{ paddingRight: { lg: '100px', md: '50px' } }}>
                            <Box component="h2" sx={{
                                fontWeight: '500',
                                fontSize: '20px',
                                paddingBottom: '10px',
                                marginBottom: '20px',
                                borderBottom: '2px solid #959595'
                            }}>
                                Your Delivery Details
                            </Box>

                            <Box component="div" className="input_group">
                                <Box
                                    component="input"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </Box>
                            <Box component="div" className="input_group">
                                <Box
                                    component="input"
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required />
                            </Box>
                            <Box component="div" className="input_group">
                                <Box
                                    component="input"
                                    type="text"
                                    placeholder="Flat, suit or floor"
                                    name="flat"
                                    value={formData.flat}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box component="div" className="input_group">
                                <Box
                                    component="input"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box component="div" className="input_group">
                                <Box
                                    component="textarea"
                                    placeholder="Add delivery note" name="deliveryNote"
                                    value={formData.deliveryNote}
                                    onChange={handleChange}
                                />
                            </Box>

                            {/* <Box component="div" className="input_group">
                                <Box component="button" type="submit" className="btn btn_primary">Save & Continue</Box>
                            </Box> */}

                        </Grid>
                        <Grid item md={6} xs={12}>
                            {cartItems > 0 ? (
                                <Box component="div" className="order_review_wrapper" sx={{ paddingLeft: { lg: '100px', md: '50px' } }}>
                                    <Box component="p">From <strong>Gulshan Plaza Restaurant GPR</strong></Box>
                                    <Box component="p">Arriving in 20-30 minutes</Box>
                                    <Box component="p">107 Road No 8</Box>

                                    <Box component="div" sx={{ marginTop: '20px' }} className="order_items_wrapper">
                                        {cartFoods.map((food, index) => (
                                            <Box
                                                key={index}
                                                component="div"
                                                className="order_item"
                                                sx={{
                                                    backgroundColor: '#F5F5F5',
                                                    padding: '7px 10px',
                                                    borderRadius: '5px',
                                                    marginBottom: '10px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <Box component="span"
                                                    className="remove_item"
                                                    onClick={() => handleRemoveCart(food)}
                                                    sx={{
                                                        width: '35px',
                                                        height: '35px',
                                                        position: 'absolute',
                                                        top: '5px',
                                                        right: '0',
                                                        left: 'auto',
                                                        color: 'var(--primary-color)',
                                                        cursor: 'pointer',
                                                        zIndex: '99'
                                                    }}
                                                >
                                                    <HighlightOffIcon />
                                                </Box>
                                                <Box component="div" sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Box component="div" sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>


                                                        <Box component="img" src={food.thumbnail} alt={food.title} sx={{
                                                            maxWidth: '100px'
                                                        }} />


                                                        <Box component="div" sx={{
                                                            marginLeft: { md: '20px', xs: '10px' }
                                                        }}>
                                                            <Box component="h4" sx={{
                                                                fontWeight: '500'
                                                            }}>{food.title}</Box>
                                                            <Box component="h3" sx={{
                                                                color: 'var(--primary-color)'
                                                            }}>${food.price}</Box>
                                                        </Box>
                                                    </Box>

                                                    <Box component="div" className="checkout_quantity" sx={{
                                                        minWidth: '100px'
                                                    }}>
                                                        <Box component="button"
                                                            type="button"
                                                            onClick={() => handleQtyDecrement(food.quantity, index)}
                                                            sx={{
                                                                width: '30px',
                                                                height: '40px',
                                                                backgroundColor: 'transparent',
                                                            }}>-</Box>

                                                        <Box component="input"
                                                            type="number"
                                                            min="1"
                                                            value={food.quantity}
                                                            onChange={(event) => qtyChangeHandler(event, index)}
                                                            sx={{
                                                                width: { sm: '35px', xs: '30px' },
                                                                height: { sm: '40px', xs: '30px' },
                                                                textAlign: 'center',
                                                                borderRadius: '7px',
                                                                fontWeight: '700'
                                                            }} />

                                                        <Box component="button"
                                                            type="button"
                                                            onClick={() => handleQtyIncrement(food.quantity, index)}
                                                            sx={{
                                                                width: '30px',
                                                                height: '40px',
                                                                backgroundColor: 'transparent',
                                                            }}>+</Box>
                                                    </Box>

                                                </Box>



                                            </Box>
                                        ))}

                                    </Box>


                                    <Box component="div" className="checkout_summery" sx={{ marginTop: '25px' }}>
                                        <Box component="p" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '10px'
                                        }}>
                                            <Box component="span">Subtotal ({cartItems} Item{cartItems > 1 ? 's' : ''})</Box>
                                            <Box component="span">${subtotal.toFixed(2)}</Box>
                                        </Box>

                                        <Box component="p" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '10px'
                                        }}>
                                            <Box component="span">Tax</Box>
                                            <Box component="span">${tax.toFixed(2)}</Box>
                                        </Box>

                                        <Box component="p" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '10px'
                                        }}>
                                            <Box component="span">Delivery Charge</Box>
                                            <Box component="span">${shipping.toFixed(2)}</Box>
                                        </Box>

                                        <Box component="p" sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '10px',
                                            fontSize: '18px !important'
                                        }}>
                                            <Box component="span">Total</Box>
                                            <Box component="span">${total.toFixed(2)}</Box>
                                        </Box>

                                        <Box component="div" sx={{
                                            marginTop: '25px'
                                        }}>
                                            <Box
                                                component="button"
                                                type="submit"
                                                className="btn btn_primary"
                                                style={{ display: 'block', width: '100%' }
                                                }>
                                                Place Order
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ) : (
                                <Box component="h2" sx={{
                                    textAlign: 'center',
                                    color: '#666',
                                    paddingTop: '25px'
                                }}>Your cart is empty!</Box>
                            )}

                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default Checkout;

