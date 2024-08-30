import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'

const Profile = () => {
  const value = useContext(UserContext)
  useEffect(() => {
    console.log("value on profile page from user context: ",value)
  },[])
  return (
    <div >
      {/* <h1>profile pg</h1> */}
      {/* <div>
        <h1>Welcome: </h1>
        <h3>{value.userDetails.name}</h3>
        <h4>your email is: {value.userDetails.email}</h4>
      </div> */}
      {/* card */}
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {value.userDetails.name}
    </h4>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed text-gray-900 bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      email: {value.userDetails.email}
    </p>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <a href="#facebook"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
      <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="#twitter"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
      <i
        class="fab fa-twitter" aria-hidden="true">
      </i>
    </a>
    <a href="#instagram"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
        class="fab fa-instagram" aria-hidden="true">
      </i>
    </a>
  </div>
</div>
      {/*  */}
    </div>
  )
}

export default Profile
