import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);
  useEffect(() => {
    console.log("navbar k component me context ka data: ", userDetails);
  }, []);

  const clearData = () => {
    setUserDetails({
      name: "",
      email: "",
      isLoggedIn: false,
    });
    console.log("user signed out");
  };
  return (
    <div>
      <div className="flex align-baseline justify-between bg-orange-300">
        <div>
          <h1 className="text-xl hover:text-base font-bold">My app</h1>
        </div>
        <div className="flex gap-3 align-middle justify-center text-center ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          {userDetails.isLoggedIn ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clearData}>sign out</button>
        ) : (
          ""
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
