import React from 'react'
import { Box, Typography } from '@mui/material'

function WouldYouChooseUs() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '50px 100px' }}>
        <Typography variant="h3">
          Why  you should  choose us !?
        </Typography>

        <Typography variant="h5" sx={{ textAlign: 'center', color: '#a8a8a8' }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat.
        </Typography>
      </Box>

      <Box sx={{ margin: '0 100px', display: 'flex', flexDirection: 'row-reverse' }}>
        <img src="./DidYouCoose.png" alt="Rating  of our clients" />

        <Box>
          <Box sx={{ maxWidth: '475px', marginTop: '30px' }}>
            <span style={{ padding: '8px 17px', background: '#ed6c02', color: 'white', fontSize: '30px', borderRadius: '50%' }}>1</span>
            <Typography sx={{ margin: '20px 0 0' }} variant='h5'>Provide the best choice of Room. </Typography>
            <Typography sx={{ color: '#a8a8a8' }}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. </Typography>
          </Box>

          <Box sx={{ maxWidth: '475px', marginTop: '60px' }}>
            <span style={{ padding: '8px 17px', background: '#ed6c02', color: 'white', fontSize: '30px', borderRadius: '50%' }}>1</span>
            <Typography sx={{ margin: '20px 0 0' }} variant='h5'>Provide the best choice of Room. </Typography>
            <Typography sx={{ color: '#a8a8a8' }}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. </Typography>
          </Box>

          <Box sx={{ maxWidth: '475px', marginTop: '60px' }}>
            <span style={{ padding: '8px 17px', background: '#ed6c02', color: 'white', fontSize: '30px', borderRadius: '50%' }}>1</span>
            <Typography sx={{ margin: '20px 0 0' }} variant='h5'>Provide the best choice of Room. </Typography>
            <Typography sx={{ color: '#a8a8a8' }}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default WouldYouChooseUs
