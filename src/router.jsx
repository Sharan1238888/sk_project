import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainHome from './MainHome.jsx';
import Index from "./login";

export default function Router() {  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainHome />}></Route>
            <Route exact path='/Index' element={<Index />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}