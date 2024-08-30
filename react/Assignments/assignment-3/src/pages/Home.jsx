import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleSignup = () => {
        navigate('/signup')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    
  return (
    <div>
       <h1>This is assignment 3</h1>
      <button onClick={handleSignup}>Go to Signup Page</button>
      <button onClick={handleLogin}>Go to Login Page Page</button>
    </div>
  )
}

export default Home
