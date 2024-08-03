import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Modal,
  Typography,
  Avatar,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Menu,
  MenuItem
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const styleForModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px 10px',
  width: '500px',
  bgcolor: 'background.paper',
  border: '0'
};

const styleForAppBar = {
  bgcolor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};

const styleForModalForms = {
  padding: '50px 20px',
  width: '500px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

const styleForJoinUsModalForms = {
  minWidth: '100%',
  marginBottom: '25px',
};

function NavBar() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  const editModalClose = () => {
    const oldPassword = localStorage.getItem('password');
    const oldPasswordInputValue = document.getElementById('editOldPassword').value;
    const newPasswordInputValue = document.getElementById('editNewPassword').value;

    if (oldPassword === oldPasswordInputValue) {
      localStorage.setItem('password', newPasswordInputValue);
      setEditModalOpen(false);
    } else {
      console.error("Old password is incorrect.");
    }
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loginStatus);
  }, []);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setAnchorEl(null);
    setEditModalOpen(true);
  };

  const handleLogOut = () => {
    localStorage.setItem('isLogin', 'false');
    setIsLogin(false);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={styleForAppBar}>
        <Toolbar>
          <Box component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <img src="./logo.svg" alt="logo" style={{ height: 40 }} />
          </Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'black', textTransform: 'capitalize' }}>Home</Button>
          <Button color="inherit" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={() => { window.location.href = '/#hotels'; }}>Hotel</Button>
          <Button color="inherit" component={RouterLink} to="/about" sx={{ color: 'black', textTransform: 'capitalize' }}>About</Button>
          <Button color="inherit" sx={{ color: 'black', textTransform: 'capitalize' }}>Contact</Button>

          <LanguageSelector />

          {!isLogin && (
            <Button id='navLogInBtn' sx={{ textTransform: 'capitalize' }} onClick={modalOpen} color="warning">Sign in</Button>
          )}

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
                <Typography variant="h4" sx={{ margin: 'auto' }} gutterBottom>
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

                <Button fullWidth color='warning' size="large" sx={{ margin: '15px 0', textTransform: 'capitalize' }} variant="contained">Sign up</Button>

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
                      <img src="./google_logo.png" alt="" />
                    </Box>
                    Google
                  </Button>

                  <Button variant="outlined" sx={{ color: 'black', fontSize: '20px', fontWeight: '500', width: '220px', textTransform: 'capitalize' }} color="warning">
                    <Box sx={{ height: '30px', margin: '0px 5px' }}>
                      <img src="./facebook_logo.png" alt="" />
                    </Box>
                    Facebook
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>

          {isLogin && (
            <div>
              <Avatar src="./avatar.png" alt="Anonymous" sx={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handleAvatarClick} />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleEditClick}>Edit</MenuItem>
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </div>
          )}

          <Modal
            open={editModalOpen}
            onClose={editModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleForModal}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>Change password</Typography>

              <TextField
                id="editOldPassword"
                sx={styleForJoinUsModalForms}
                label="Old Password"
                type="password"
              />

              <TextField
                id="editNewPassword"
                sx={styleForJoinUsModalForms}
                label="New Password"
                type="password"
              />

              <Button
                fullWidth
                color="warning"
                size="large"
                sx={{ margin: '15px 0', textTransform: 'capitalize' }}
                variant="contained"
                onClick={editModalClose}
              >
                Save
              </Button>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;