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

export default function SignUp() {


// credential to localstorage
let navigate = useNavigate()
   
  let initvalue;
  if(localStorage.getItem("Employee") === null){
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem("Employee"))
  }

  const [value, setValue] = useState(initvalue);

    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    // console.log(name);
    // console.log(lname);
    // console.log(pass);
    // console.log(email);

// onSubmit
    
       
  
      useEffect(() => {
      localStorage.setItem("Employee", JSON.stringify(value))
      },[value])
  

      const onSubmit = async (e) => {
        e.preventDefault();
    
        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('Employee'));
    
        // Check if the entered credentials match any user in local storage

        let found = false;
        let found2 = false;
        if(email === "" | pass === "")
        {
          found2 = true;
          alert('Fill the fild');

        }

        if(!found2){
        for (const user in users) {
          if (users[user].email === email) {
            found = true;
            alert('Username already exits!');
            break;
          }
        }
    
        if (!found) {
          let emp_id = 100;
          if(value.length === 0){
            emp_id = 101;
          }
          else{
            emp_id = value[value.length - 1].emp_id + 1
          }
    
          const details ={
            emp_id:emp_id,
            name:name,
            lname:lname,
            pass:pass,
            email:email
          }
          setValue([...value,details])
          await localStorage.setItem("Employee", JSON.stringify(value))
          navigate("/Login")

          alert('User registered Successfuly');
        }

          
        }
      };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>{setLname(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{setPass(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href=".\Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}