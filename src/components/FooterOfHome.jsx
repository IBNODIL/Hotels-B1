import React from 'react'
import { Typography, Box, Divider, TextField, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function FooterOfHome() {
  return (
    <footer style={{ background: 'black', color: 'white', padding: '50px 100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant='h4' sx={{ marginBottom: '20px', textTransform: 'uppercase' }}>
        Get in Touch
      </Typography>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box>
          <Typography variant='h5' sx={{ marginBottom: '20px' }}>
            Quick link
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Home
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Services
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            About us
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Contact
          </Typography>

        </Box>

        <Box>
          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '30px', textAlign: 'center' }}>
            Amet minim mollit non deserunt ullamco est <br />
            sit aliqua dolor do amet sint.
          </Typography>

          <Box>
            <TextField color='warning' id="outlined-basic" label="Enter email" variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'orange',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'orange',
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white',
                },
              }} />

            <Button sx={{ height: '56px' }} variant='contained' color='warning'>Subscribe</Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <Typography variant='h5' sx={{ marginBottom: '20px' }}>
            Useful
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Privacy policy
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Legal
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Blogs
          </Typography>

          <Typography variant='body2' sx={{ color: '#787878', display: 'block', marginBottom: '15px' }}>
            Contact
          </Typography>

        </Box>
      </Box>

      <Divider sx={{ background: '#787878', width: '100%' }} />

      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '16px' }}>
        <Box>  </Box>

        <Box>
          <Typography variant='caption'>Copywrite goes to - Breakdance.com</Typography>
        </Box>


        <Box>
          <TwitterIcon sx={{ color: 'white' }} />
          <YouTubeIcon />
          <FacebookIcon />
        </Box>
      </Box>
    </footer>
  )
}

export default FooterOfHome
