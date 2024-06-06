import React from 'react'
import Hotels from '../components/Hotels'
import WouldYouChooseUs from '../components/WouldYouChooseUs'
import FilterByLocation from '../components/FilterByLocation'
import FilterByStar from '../components/FilterByStar'
import { Box, Button } from '@mui/material'

const styleForFilterSection = {
  margin: '-48px 100px 50px',
  minWidth: '1000px',
  background: '#000000',
  // opacity: '0.5',
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

function Home() {
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

      <div id='hotels'>
        <Hotels />
      </div>

      <WouldYouChooseUs />
    </>
  )
}

export default Home
