import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ChooseItem = ({ item }) => {
    return (
        <Box component="div" className="chooseUs_item">
            <Box component="img" src={item.thumbnail} alt={item.title} />
            <Grid container spacing={2} sx={{ marginTop: '15px' }}>
                <Grid
                    item
                    xs={2}
                >
                    <Box component="img" src={item.icon} alt={item.title}></Box>
                </Grid>
                <Grid
                    item
                    xs={10}
                >
                    <Box
                        component="h4"
                        sx={{
                            fontSize: '16px',
                            marginBottom: '15px',
                            fontWeight: '500'
                        }}>
                        {item.title}
                    </Box>

                    <Box component="p"
                        sx={{ fontSize: '14px', color: '#878787' }}>
                        {item.description}
                    </Box>

                    <Box component="p" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '10px' , 
                        cursor: 'pointer'
                    }}>
                        <Box component="span" sx={{ marginRight: '10px' , color:'#5076F7', fontSize:'14px', fontWeight:'600' }}>
                            See more
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#26E478',
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                               
                            }}
                        >
                            <ArrowForwardIcon sx={{ fontSize:'18px !important'}} />
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChooseItem;