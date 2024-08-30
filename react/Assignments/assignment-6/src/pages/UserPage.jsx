import React from 'react'
import { Outlet } from 'react-router-dom'

const UserPage = () => {
  return (
    <div>
      {/* <h1>User Page</h1> */}
      <Outlet />
    </div>
  )
}

export default UserPage
