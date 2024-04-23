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
        <Button><Link to="Index" className="link">Login auth</Link></Button>
        <Button><Link to="Dept" className="link">Department page</Link></Button>
        </div>
        </ButtonGroup>
        
    </div>
  )
}
