import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, FormControl, InputAdornment, IconButton, InputLabel, Input, Checkbox, Divider } from '@mui/material';
import { Visibility, VisibilityOff, CircleOutlined, Circle } from '@mui/icons-material/';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin && isLogin === 'true') {
      setTimeout(navigate, 0, "/", { replace: true });
    } else if(isLogin === 'false'){
      console.log('succesfuly')
    } else {
      navigate('/register'); 
    }
  }, [navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLogin', 'true')
      setTimeout(navigate, 0, "/", { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{ overflow: 'hidden', height: '100vh', width: '100vw', display: 'flex' }}>
      <img style={{ height: '100vh' }} src="./LogInPageImage.png" alt="Login Page" />

      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', padding: '100px 50px' }}>
        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
          Welcome
        </Typography>

        <FormControl sx={{ m: 1, width: '500px', marginTop: '50px' }} variant="standard">
          <InputLabel sx={{ fontSize: '20px' }} color='warning' htmlFor="standard-adornment-email">Email Address</InputLabel>
          <Input
            id="standard-adornment-email"
            sx={{ fontSize: '30px' }}
            color='warning'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '500px' }} variant="standard">
          <InputLabel sx={{ fontSize: '20px' }} color='warning' htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            sx={{ fontSize: '30px' }}
            color='warning'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          onClick={handleLogin}
          size="large"
          variant="contained"
          color="warning"
          sx={{ mt: 3, width: '500px', margin: '25px 0' }}
        >
          Login
        </Button>

        <Box
          sx={{ width: '500px', margin: '25px 0', display: 'flex', alignItems: 'flex-end', flexWrap: 'nowrap' }}
        >
          <Checkbox icon={<CircleOutlined />} checkedIcon={<Circle color='warning' />} />
          <Typography variant='body2'>
            By clicking register you confirm that you have read and accepted the terms <span style={{ color: '#ed6c02' }}>User Agreement</span> and <span style={{ color: '#ed6c02' }}>User Privacy Notices</span>
          </Typography>
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '500px', padding: '0 80px'}}>
          <Divider sx={{ backgroundColor: 'orange', height: 2, width: '40%', margin: '10px' }} />
          <Typography variant="h5">Or</Typography>          
          <Divider sx={{ backgroundColor: 'orange', height: 2, width: '40%', margin: '10px' }} />
        </Box>

        <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "500px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                width: "220px",
                textTransform: "capitalize",
              }}
              color="warning"
            >
              <Box sx={{ height: "30px", margin: "0px 5px" }}>
                <img src="./google_logo.png" alt="" />
              </Box>
              Google
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
                width: "220px",
                textTransform: "capitalize",
              }}
              color="warning"
            >
              <Box sx={{ height: "30px", margin: "0px 5px" }}>
                <img src="./facebook_logo.png" alt="" />
              </Box>
              Facebook
            </Button>
          </Box>
      </Box>
    </Box>
  );
}

export default Login;