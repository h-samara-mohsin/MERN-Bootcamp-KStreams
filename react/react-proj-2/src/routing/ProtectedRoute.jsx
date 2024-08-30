import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = (props) => {
    // const isLoggedIn = true;

    const val = useContext(UserContext)

    useEffect(() => {
      console.log(val)
    },[])

  return (
    <div>
      {val.userDetails.isLoggedIn ? props.children : <Navigate to={"/user/login"} />}
    </div>
  )
}

export default ProtectedRoute
