import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainHome from './MainHome.jsx';
import Index from "./login";
import Home from './Department/home.jsx';
import Department from './Department/Department.jsx';
import Blog from './Department/Blog.jsx';

export default function Router() {  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainHome />}></Route>
            <Route exact path='/Index' element={<Index />}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/Department' element={<Department />}></Route>
            <Route exact path='/Blog' element={<Blog />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}