import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Mainhome() {
  return (
    <div>
    <h1>*****  MainHome  *****</h1>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <div>
        <Button><Link to="Index" className="link">Login</Link></Button>
        </div>
        </ButtonGroup>
        
    </div>
  )
}
