import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Modal, Typography, Avatar, Stack, Divider, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const styleForModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '1000px',
  width: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
}

const styleForAppBar = {
  bgcolor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.18)',
}

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

function NavBar() {
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <>
      <AppBar
        position="static"
        sx={styleForAppBar}
      >
        <Toolbar>
          <Box component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="logo" style={{ height: 40 }} />
          </Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'black', textTransform: "Capitalize" }}>Home</Button>
          <Button color="inherit" sx={{ color: 'black', textTransform: "Capitalize" }} onClick={() => { window.location.href = '/#hotels'; }} >Hotel</Button>
          <Button color="inherit" component={RouterLink} to="/about" sx={{ color: 'black', textTransform: "Capitalize" }}>About</Button>
          <Button color="inherit" sx={{ color: 'black', textTransform: "Capitalize" }}>Contact</Button>

          <LanguageSelector />

          <Button sx={{ textTransform: "Capitalize" }} onClick={modalOpen} color="warning">Sign in</Button>

          <Modal
            open={open}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleForModal} component="section" id="modal-modal-title">
              <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                  <img src="./logo.svg" alt="logo" style={{ height: 40 }} />
                </Box>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={modalClose}
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
          </Modal>

          <Avatar src="./avatar.png" alt="Anonymus" sx={{ marginLeft: '10px' }} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;