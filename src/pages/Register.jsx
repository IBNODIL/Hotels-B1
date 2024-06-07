import React from 'react'
import { Toolbar, Button, Box, Typography, Divider, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';


const styleForModalForms = {
  padding: "50px 20px",
  width: "500px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}

const styleForJoinUsModalForms = {
  minWidth: "500px",
  marginBottom: "25px"
}

const styleForModal = {
  width: '100vw',
  bgcolor: 'background.paper',
}

function Register() {
  return (
    <>
      <Box sx={styleForModal} component="section" id="modal-modal-title">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="logo" style={{ height: 40 }} />
          </Box>
          <Button
            variant="contained"
            color="warning"
            component={RouterLink}
            to="/login"
            sx={{ color: 'white', textTransform: 'capitalize' }}
          >
            Login
          </Button>
        </Toolbar>

        <Divider />

        <Box sx={styleForModalForms}>
          <Typography variant="h4" sx={{ margin: "auto" }} gutterBottom>
            JOIN US
          </Typography>

          <TextField
            sx={styleForJoinUsModalForms}
            label="Insert Name"
            id="outlined-size-normal"
          />

          <TextField
            sx={styleForJoinUsModalForms}
            label="Insert your email"
            id="outlined-size-normal"
          />

          <TextField
            sx={styleForJoinUsModalForms}
            label="Insert your password"
            id="outlined-size-normal"
          />

          <FormControlLabel control={<Checkbox color='warning' defaultChecked />} label="Agree to Terms and Conditions" />

          <Button fullWidth color='warning' size="large" sx={{ margin: "15px 0", textTransform: "capitalize" }} variant="contained">Sign up</Button>

          <Box sx={{ width: '100%', textAlign: 'center', mt: 2, mb: 2 }}>
            <Divider>
              <Typography variant="body1" sx={{ color: 'text.secondary', marginRight: '15px', marginLeft: '15px' }}>
                Or
              </Typography>
            </Divider>
          </Box>


          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button variant="outlined" sx={{ color: 'black', fontSize: '20px', fontWeight: '500', width: '220px', textTransform: 'capitalize' }} color="warning">
              <Box sx={{ height: '30px', margin: '0px 5px' }}>
                <img src="./gogle_logo.png" alt="" />
              </Box>
              Google
            </Button>

            <Button variant="outlined" sx={{ color: 'black', fontSize: '20px', fontWeight: '500', width: '220px', textTransform: 'capitalize' }} color="warning">
              <Box sx={{ height: '30px', margin: '0px 5px' }}>
                <img src="./facebook_logo.png" alt="" />
              </Box>
              Google
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Register
