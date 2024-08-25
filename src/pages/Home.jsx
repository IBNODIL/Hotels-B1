import React, { useEffect, useState } from 'react';
import WouldYouChooseUs from '../components/WouldYouChooseUs';
import FilterByLocation from '../components/FilterByLocation';
import FilterByStar from '../components/FilterByStar';
import OurCustomersFeedback from '../components/OurCustomersFeedback';
import FooterOfHome from '../components/FooterOfHome';
import { Box, Button, CardMedia, CardContent, Card, Typography, Rating, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setKeyValue } from '../features/actions';

const styleForFilterSection = {
  margin: '-48px 100px 50px',
  minWidth: '1000px',
  background: '#000000',
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hotels, setHotels] = useState([]);

  const toAbout = (event) => {
    const buttonId = event.currentTarget.id;
    
    // Dispatch the Redux action to set key value to 1
    dispatch(setKeyValue(1));
    
    navigate('/about');
  };

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
      console.log('Successfully logged in');
    } else if (isLogin === 'false') {
      navigate('/login');
    } else {
      navigate('/register');
    }
  }, [navigate]);

  useEffect(() => {
    fetch('http://localhost:3000/hotels')
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <img style={{ width: '100%' }} src="./home_hero.png" alt="image of one hotel" />
      </Box>

      <Box sx={styleForFilterSection}>
        <FilterByLocation />
        <FilterByStar />
        <Button disableElevation color='warning' sx={{ fontSize: 'large', height: '56px', padding: '0 35px' }} variant="contained">SEARCH</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {hotels && hotels.map((hotel) => (
          <Card key={hotel.id} sx={{ maxWidth: '432px', height: '400px', margin: '50px 20px' }}>
            <CardMedia
              component="img"
              height="300"
              image="./card_in_filter_section.png"
              alt={hotel.name}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography noWrap gutterBottom variant="h6" sx={{ fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px' }} component="div">
                  {hotel.name}
                </Typography>
                <Rating name="read-only" value={hotel.rating || 0} readOnly />
              </Box>

              <CardActions>
                <Button id={hotel.id} onClick={toAbout} variant='contained' disableElevation color="warning" sx={{ height: '54px', width: '173px', borderRadius: '10px' }}>
                  See
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>

      <WouldYouChooseUs />
      <OurCustomersFeedback />
      <FooterOfHome />
    </>
  );
}

export default Home;
