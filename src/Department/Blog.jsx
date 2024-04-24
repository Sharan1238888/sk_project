import React from 'react'
import Dept from './Navbar.jsx';
import './new.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Blog() {
  return (

    <div>
        <Dept />
        <h1>------------Blog-----------</h1>


        <Button><Link to="../" className="link">Go to main page</Link></Button>
        </div>
  )
}
