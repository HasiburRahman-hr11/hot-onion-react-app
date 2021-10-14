import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { chooseItems } from '../../fakedata';
import ChooseItem from '../ChoosItem/ChooseItem';

const ChooseUs = () => {
    return (
        <Box component="div" sx={{ marginTop: '50px' }}>
            <Container>
                <Box
                    component="h2"
                    sx={{
                        fontSize: '22px',
                        marginBottom: '15px'
                    }}
                >
                    Why you choose us
                </Box>
                <Box
                    component="p"
                    sx={{
                        fontSize: '14px',
                        marginBottom: '30px'
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam <br /> voluptates est, consequatur id quos facilis assumenda beatae voluptatem.
                </Box>

                <Grid container spacing={4}>
                    {chooseItems.map(item => (
                        <Grid
                            key={item._id}
                            item
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <ChooseItem item={item}/>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>
    );
};

export default ChooseUs;