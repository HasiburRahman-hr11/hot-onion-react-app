import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { foods } from '../../fakedata';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    return (
        <Box component="div"
            sx={{
                marginTop: '50px'
            }}>
            <Container fixed>
                <Tabs>
                    <TabList className="foods_tabs">
                        <Tab className="foods_tabs_item">Breakfast</Tab>
                        <Tab className="foods_tabs_item">Lunch</Tab>
                        <Tab className="foods_tabs_item">Dinner</Tab>
                    </TabList>

                    <TabPanel>
                   
                            <Grid container spacing={4}>
                                {foods.filter(food => food.type === 'breakfast').map(food => (
                                    <Grid
                                        item
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        key={food._id}
                                    >
                                        <Food food={food} />
                                    </Grid>
                                ))}
                            </Grid>
         
                    </TabPanel>
                    <TabPanel>
   
                            <Grid container spacing={4}>
                                {foods.filter(food => food.type === 'lunch').map(food => (
                                    <Grid
                                        item
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        key={food._id}
                                    >
                                        <Food food={food} />
                                    </Grid>
                                ))}
                            </Grid>
   
                    </TabPanel>
                    <TabPanel>
  
                            <Grid container spacing={4}>
                                {foods.filter(food => food.type === 'dinner').map(food => (
                                    <Grid
                                        item
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        key={food._id}
                                    >
                                        <Food food={food} />
                                    </Grid>
                                ))}
                            </Grid>

                    </TabPanel>
                </Tabs>

                <Box component="div" sx={{textAlign:'center' , marginTop:'50px'}}>
                    <button className="btn btn_secondary">Checkout Your Food</button>
                </Box>
            </Container>

        </Box>
    );
};

export default Foods;