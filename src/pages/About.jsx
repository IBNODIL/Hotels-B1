import React from 'react'
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
  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <img style={{ width: '100%' }} src="./about_hero_1.png" alt="image of one hotel" />
      </Box>

      <Box sx={styleForFilterSection}>
        
        

        <Button disableElevation color='warning' sx={{ fontSize: 'large', height: '56px', padding: '0 35px' }} variant="contained">Submit</Button>
      </Box>

      <Box>

      </Box>
    </>
  )
}

export default About
