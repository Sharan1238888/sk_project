import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Mainhome() {
  const main ={
    display:'flex',
      justifyContent: 'center', // horizontally center
      alignItems: 'center', // vertically center
      // height: '100vh', // make sure the div takes up the full viewport height
      margin: 0, // remove default margin
      padding: 0 // remove default padding
  }
  return (
    <div >

    <h1 style={main}>*****  MainHome  *****</h1>
    <div style={main}>
    
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <div>
        <Button><Link to="Index" className="link-light">Login auth</Link></Button>
        <Button><Link to="Home" className="link-light">Department page</Link></Button>
        <Button><Link to="Homepage" className="link-light">Homepage</Link></Button>
        <Button><Link to="Login" className="link-light">Login test</Link></Button>
      
        
        </div>
        </ButtonGroup>
        
    </div>
    </div>
  )
}
