import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };


  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(JSON.parse(localStorage.getItem("Employee")))
    setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")))
  }, [])
  console.log(display)
  
  // localStorage.setItem('Employee', JSON.stringify([{ email: 'sharan', pass: '123' }]));


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  let navigate = useNavigate()

  // const handleLogin1 = () => {
  //   if (username === 'sharan' && password === '123') {
  //     localStorage.setItem('loggedIn', 'true');
  //     setLoggedIn(true);
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('Employee'));

    // Check if the entered credentials match any user in local storage
    let found = false;
    for (const user in users) {
      if (users[user].email === username && users[user].pass === password) {
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
        found = true;
        alert('Login successful!');
        break;
      }
    }

    if (!found) {
      alert('Invalid username or password. Please try again.');
    }
  };


  // const handleLogout = () => {
  //   localStorage.removeItem('loggedIn');
  //   setLoggedIn(false);
  // };


  return (

    <div>

    {loggedIn ? (
      <div>
        {/* <h2>Welcome, {"username"}!</h2> */}
        {/* <button onClick={handleLogout}>Logout</button> */}
        {navigate("/Homepage")}
      </div>
    ) : (
      <div>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{background:'transparent', position:'absolute',left:'450px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <Typography noWrap flexWrap={'nowrap'}>
          User: sharan || password: 123
          </Typography> */}
          
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href=".\signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
    )}
    </div>
  );
}