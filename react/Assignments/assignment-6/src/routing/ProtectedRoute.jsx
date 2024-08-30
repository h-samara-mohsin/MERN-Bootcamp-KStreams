import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

  const navigate = useNavigate()

    const val = useContext(UserContext)
    useEffect(() => {
        console.log("value on protected route pg: ",val)
    },[])

  return (
    <div>
      {val.userDetails.isLoggedIn ? props.children : <Navigate to={"/user/login"} /> }
    </div>
  )
}

export default ProtectedRoute
