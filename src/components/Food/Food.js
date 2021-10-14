import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    return (
        <Box component="div"
            className="food"
            sx={{ backgroundColor: '#fff', padding: '15px 20px', textAlign: 'center', borderRadius: '5px' }}
        >
            <Box component="div" sx={{ marginBottom: '20px', padding: { sm: '0 30px', xs: '0 15px' } }}>
                <Link to={`/foods/${food._id}`}>
                    <Box
                        component="img"
                        src={food.thumbnail}
                        alt={food.title}
                    />
                </Link>
            </Box>
            <Box component="div">
                <Box component="h4" sx={{
                    fontSize: '16px',
                    marginBottom: '10px',
                    fontWeight: '500'
                }}>
                    <Link to={`/foods/${food._id}`}>{food.title}</Link>
                </Box>
                <Box component="p" sx={{ fontSize: '14px', color: '#818181', marginBottom: '10px' }}>
                    {food.description.substr(0 , 30)}
                </Box>
                <Box component="h2" sx={{ fontWeight: '500', fontSize: '20px' }}>
                    ${food.price}
                </Box>
            </Box>
        </Box>
    );
};

export default Food;