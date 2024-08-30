import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'


const Routing = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing
