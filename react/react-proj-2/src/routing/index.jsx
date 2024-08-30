import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import ProductDetails from '../pages/ProductDetails'
import UserPage from '../pages/UserPage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ErrorPage from '../pages/ErrorPage'
import Cart from '../pages/Cart'
import ProtectedRoute from './ProtectedRoute'
import FormValidation from '../pages/FormValidation'
import LayoutOne from '../layouts/LayoutOne'

const Routing = () => {
  return (
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route index={true} element={<Home />} /> */}
    <Route index element={<LayoutOne><Home /></LayoutOne>} />
    <Route path="/products" element={<ProtectedRoute> <Products /></ProtectedRoute>} />
    <Route path="/categories" element={<LayoutOne><Categories /></LayoutOne>} />
    <Route
      path="/product-details/:productID?"
      element={<ProductDetails />}
    />
    <Route path='/cart' element={
        <ProtectedRoute>
        <Cart />
        </ProtectedRoute>
        }/>
    <Route path="/user" element={<UserPage/>}>
      <Route path="login" element={<Login />} /> 
      <Route path="signup" element={<Signup />}> </Route>
    </Route>
    <Route path='/form' element={<FormValidation />}></Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  )
}

export default Routing
