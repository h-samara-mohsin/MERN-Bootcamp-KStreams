import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Login = () => {

  // const val = useContext(UserContext)
  const {setUserDetails} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={()=>{
        // val.setUserDetails({
        setUserDetails({
          name: "Samara",
          email:"sam@gmail.com",
          isLoggedIn:true
        })
        navigate("/")
      }}
      >
        Login</button> 
    </>
  )
}

export default Login
