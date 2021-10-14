import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getOldCart, setNewCartToLs } from '../../utils/cartHandler';
import { successNotify } from '../../utils/tostify';
import { CartContext } from '../../context/CartContext';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { foods } from '../../fakedata';

const options = {
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        }
    },
};

const Single = () => {
    const { foodId } = useParams();
    const [food, setFood] = useState();
    const [quantity, setQuantity] = useState(1);
    const { setCarts } = useContext(CartContext);

    const [relatedFoods, setRelatedFoods] = useState([])


    const handleQtyIncrement = () => {
        setQuantity(quantity + 1)
    }
    const handleQtyDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = (food, quantity) => {
        setNewCartToLs(food, quantity);
        const newCart = getOldCart();
        setCarts(newCart);
        setQuantity(1);
        successNotify('Product added to cart');
    }

    useEffect(() => {
        const getSingleFood = () => {
            const singleFood = foods.find(food => food._id === foodId);
            setFood(singleFood)
            const getRelatedFoods = foods.filter(food => food.type === singleFood.type && food._id !== singleFood._id);
            setRelatedFoods(getRelatedFoods)
        }
        getSingleFood();
    }, [foodId]);



    return (
        <Box component="div" className="single_page" sx={{ marginTop: '50px' }}>
            <Container fixed>
                <Grid container spacing={5}>
                    <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <Box component="div" className="single_details">
                            <Box component="h1" sx={{
                                fontWeight: '500',
                                marginBottom: '25px',
                                fontSize: '35px',
                                paddingTop: { md: '30px' }
                            }}>
                                {food?.title}
                            </Box>
                            <Box component="p"
                                sx={{
                                    fontSize: '14px',
                                    color: '#646464',
                                    maxWidth: '450px',
                                    lineHeight: '25px'
                                }}
                            >
                                {food?.description}
                            </Box>

                            <Box component="div" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '30px 0'
                            }}>
                                <Box component="div" sx={{
                                    fontSize: { md: '24px', xs: '20px' },
                                    fontWeight: '500',

                                }}>
                                    ${food?.price}
                                </Box>

                                <Box component="div" className="quantity_wrapper" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: '25px',
                                    border: '1px solid #ddd',
                                    borderRadius: '30px'
                                }}>
                                    <Box component="button"
                                        onClick={handleQtyDecrement}
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#fff',
                                            borderRadius: '30px'
                                        }}>-</Box>

                                    <Box component="input"
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        sx={{
                                            width: '30px',
                                            height: '40px',
                                            textAlign: 'center'
                                        }} />

                                    <Box component="button"
                                        onClick={handleQtyIncrement}
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#fff',
                                            borderRadius: '30px'
                                        }}>+</Box>
                                </Box>



                            </Box>

                            <Box component="div" className="add_to_cart">
                                <Box
                                    component="button"
                                    className="btn btn_primary btn_rounded"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    onClick={() => handleAddToCart(food, quantity)}
                                >
                                    <AddShoppingCartIcon />
                                    <Box component="span" sx={{ marginLeft: '10px' }} >Add</Box>
                                </Box>
                            </Box>


                            {relatedFoods.length > 0 && (
                                <Box component="div" className="related_foods" sx={{
                                    marginTop: '50px',
                                    maxWidth: '470px',
                                    paddingRight: '40px'
                                }}>
                                    <OwlCarousel
                                        className='related_foods_slider'
                                        {...options}>
                                        {relatedFoods.map(food => (
                                            <Box component="div" key={food._id}>
                                                <Link to={`/foods/${food._id}`}>
                                                    <Box component="img" src={food.thumbnail} alt={food.title} sx={{
                                                        maxWidth: '120px'
                                                    }} />
                                                </Link>
                                            </Box>
                                        ))}

                                    </OwlCarousel>
                                </Box>
                            )}

                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <Box
                            component="div"
                            className="single_thumbnail"
                            sx={{
                                paddingLeft: { md: '50px' }
                            }}
                        >
                            <Box component="img" src={food?.thumbnail} alt={food?.title} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Single;