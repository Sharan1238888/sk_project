import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logobg.png'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';


export default function ButtonAppBar() {
  const app ={
    background:'rgba(180, 180, 172, 0.363)',
    boxShadow:'none'
  }


  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate("/Login");
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={app}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
            News
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1 }}>
          <Avatar src={logo} sx={{ width: 250, height: 90  }}  />
          </Typography>

          <Button onClick={handleLogout} ><Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
         Logout</Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
