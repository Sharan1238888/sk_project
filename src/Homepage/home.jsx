import React from 'react'
import Appbar from './appbar'
import './home.css'

export default function home() {
  return (
    <div className='bg'>
      <div>
      <Appbar />
     <h1 style={{textAlign:"center", position:"relative", top:"100px"}}>Home</h1>
      </div>
      </div>
  )
}
