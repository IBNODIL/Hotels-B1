import { useEffect, useState } from 'react';
import AboutHotels from '../components/AboutHotels'
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material'

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
  justifyContent: 'space-between'
}

function About() {
  const navigate = useNavigate();
  
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

  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <img style={{ width: '100%' }} src="./about_hero_1.png" alt="image of one hotel" />
      </Box>

      <Box sx={styleForFilterSection}>



        <Button disableElevation color='warning' sx={{ fontSize: 'large', height: '56px', padding: '0 35px' }} variant="contained">Submit</Button>
      </Box>

      <Box>
        <AboutHotels />
      </Box>
    </>
  )
}

export default About
