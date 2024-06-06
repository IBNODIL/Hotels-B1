import React from 'react'
import { CardActionArea, CardMedia, CardContent, Card, Box, Button, Typography, Rating, CardActions } from '@mui/material'

function CardsInFilterSection() {
  return (
    <>
      <Card sx={{ maxWidth: '432px', height: '400px', margin: '50px 20px' }}>
        <CardMedia
          component="img"
          height="300"
          image="./card_in_filter_section.png"
          alt="green iguana"
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography gutterBottom variant="h6" sx={{fontWeight: '600'}} component="div">
              Hotel  Irina Shake
            </Typography>
            <Rating name="read-only" value="5" readOnly />
          </Box>

          <CardActions>
            <Button variant='contained' disableElevation color="warning" sx={{ height: '54px', width: '173px', borderRadius: '10px' }}>
              See
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

export default CardsInFilterSection
