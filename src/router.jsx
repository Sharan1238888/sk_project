import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainHome from './MainHome.jsx';
import Index from "./login";
import Dept from './Department/Dept.jsx';
import Home from './Department/home.jsx';

export default function Router() {  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainHome />}></Route>
            <Route exact path='/Index' element={<Index />}></Route>
            <Route exact path='/Dept' element={<Dept />}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}