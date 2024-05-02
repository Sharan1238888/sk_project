import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Mainhome() {
  return (
    <div style={{ 
      display:'block',
      justifyContent: 'center', // horizontally center
      alignItems: 'center', // vertically center
      height: '100vh', // make sure the div takes up the full viewport height
      margin: 0, // remove default margin
      padding: 0 // remove default padding
  }}>
    <h1>*****  MainHome  *****</h1> 
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <div>
        <Button><Link to="Index" className="link">Login auth</Link></Button>
        <Button><Link to="Home" className="link">Department page</Link></Button>
        <Button><Link to="Homepage" className="link">Homepage</Link></Button>
        </div>
        </ButtonGroup>
        
    </div>
  )
}
