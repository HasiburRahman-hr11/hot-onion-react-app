import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import bannerBg from '../../images/bannerbackground.png';
import { foods as allFoods } from '../../fakedata';

const Banner = () => {

    const [query, setQuery] = useState('');
    const [foods, setFoods] = useState([])

    const handleLiveSearch = (e) => {
        setQuery(e.target.value);

        const matchedFoods = allFoods.filter(food => food.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));

        setFoods(matchedFoods);
    }
    return (
        <Box component="div"
            sx={{
                backgroundImage: `url(${bannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <Container fixed
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: { lg: '500px' }
                }}
            >
                <Box component="div" sx={{
                    padding: '100px 0'
                }}>
                    <Box
                        component="h1"
                        sx={{
                            fontWeight: '500',
                            fontSize: { lg: '40px', md: '30px', xs: '25px' },
                            textAlign:'center'
                        }}
                    >Best food waiting for your belly</Box>

                    <Box component="div" sx={{
                         position: 'relative',
                        margin: '0 auto',
                        marginTop: '20px',
                        maxWidth: { lg: '430px', md: '400px', xs: '300px' },
                    }}>

                        <Box
                            component="div"
                            className="banner_search_box"
                            sx={{
                                position: 'relative',
                                zIndex:'20'
                            }}
                        >
                            <Box
                                component="input"
                                type="search"
                                name="search"
                                value={query}
                                onChange={handleLiveSearch}
                                placeholder="Search for food"
                                className="banner_input"
                                sx={{
                                    height: '42px',
                                    borderRadius: '30px',
                                    paddingLeft: '15px',
                                }}
                            />
                            <Box
                                component="div"
                                className="btn btn_primary btn_rounded search_btn"
                                sx={{
                                    height: '42px',
                                    display: 'inline - block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    left: 'auto',
                                    minWidth: { lg: '100px', sm: '80px' }
                                }}
                            >Search</Box>
                        </Box>


                        {/* Live Search Result */}
                        {
                            query.length > 0 && (
                                <Box sx={{
                                    backgroundColor: '#fff',
                                    paddingTop: '50px',
                                    position:'absolute',
                                    top:'0',
                                    left:'0',
                                    zIndex:'10',
                                    width:'100%',
                                    borderRadius:'30px 30px 20px 20px',
                                    boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
                                }}>
                                    {
                                        foods.length > 0 ? (
                                            <Box component="div" className="search_results" sx={{
                                                maxHeight:'370px',
                                                overflowY:'auto'
                                            }}>
                                                {foods.map(food => (
                                                    <Link to={`/foods/${food._id}`} key={food._id} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '10px',
                                                        borderTop: '1px solid #ddd',
                                                        width: '100%'
                                                    }}>
                                                        <Box component="img" src={food.thumbnail} alt={food.title} sx={{
                                                            maxWidth: '50px'
                                                        }} />

                                                        <Box component="div" sx={{ marginLeft: '15px' }}>
                                                            <Box component="h5">{food.title}</Box>
                                                            <Box component="h5">${food.price}</Box>
                                                        </Box>
                                                    </Link>
                                                ))}
                                            </Box>
                                        ) : (
                                            <Box component="div" sx={{
                                                maxWidth: { lg: '430px', md: '400px', xs: '300px' },
                                                textAlign:'center',
                                                padding:'10px',
                                                color:'var(--primary-color)'
                                            }}>
                                                Nothing Found
                                            </Box>
                                        )
                                    }
                                </Box>
                            )
                        }

                    </Box>



                </Box>
            </Container>
        </Box>
    );
};

export default Banner;