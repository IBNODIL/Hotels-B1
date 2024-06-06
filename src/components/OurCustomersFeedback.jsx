import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styleForDots.css'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { NextArrow, PrevArrow } from './NextArrow';

const items = [
  { title: 'Floyd Miles', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco...', img: './First_customer.png' },
  { title: 'Floyd Miles', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco...', img: './Second_customer.png' },
  { title: 'Floyd Miles', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco...', img: './Third_customer.png' },
];

const OurCustomersFeedback = () => {
  const settings = {
    dots: true,
    dotsColor: '#ed6c02',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{margin: '0 100px 100px'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '100px 100px 50px' }}>
        <Typography variant="h3">
          Our  Customer Feedback
        </Typography>

        <Typography variant="h5" sx={{ textAlign: 'center', color: '#a8a8a8' }}>
          Don’t take our word for it. Trust our customers
        </Typography>
      </Box>


      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Slider {...settings}>
          {items.map((item, index) => (
            <Box key={index} sx={{ padding: '5px 8px' }}>
              <Card sx={{ margin: '0 auto', boxSizing: 'border-box' }}>
                <CardContent>
                  <CardMedia component="img" image={item.img} alt={item.title} />
                  <Typography sx={{ margin: '10px 0 5px' }} variant="h5">{item.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurCustomersFeedback;
