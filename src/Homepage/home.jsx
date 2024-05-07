import React from 'react'
import Appbar from './appbar'
import './home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {


  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")))
  }, [])

  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
    {loggedIn ? (
    <div className='bg'>
      <div>
      <Appbar />
      {/* <Login /> */}
     <h1 className='text'>A RELIABLE WAY TO TRAVEL</h1><br/>
     <p className='text'>Come and listen to a story about a man named Jed a poor mountaineer barely kept his family fed so lets make the most of this beautiful day<br/>
      since we are together it is a beautiful day in this neighborhood a beautiful day for a neighbor</p>
  
</div>       
      </div>
      ) : (
        <div>

        {navigate("/Login")}
        </div>

      )}
      </div>
  )
}
