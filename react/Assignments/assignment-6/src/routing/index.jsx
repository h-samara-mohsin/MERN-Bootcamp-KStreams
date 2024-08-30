import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import UserPage from '../pages/UserPage'

const Routing = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/profile' element={<ProtectedRoute> <Profile/> </ProtectedRoute> } />
        <Route path='/user' element={<UserPage />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
        </Route>
    </Routes>  )
}

export default Routing
