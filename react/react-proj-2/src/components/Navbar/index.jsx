import { useEffect } from "react";
// import "./styles.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect (() =>{
    console.log("LOCATION: ",location);
  },[location]) 

  return (
    <div className="w-full bg-red-400">
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          My Store
        </h1>
      </div>
      <div>
        <NavLink className="NavLink" to={"/"}>
          Home
        </NavLink>
        <NavLink className="NavLink" to={"/products"}>
          Products
        </NavLink>
        <NavLink className="NavLink" to={"/categories"}>
          Categories
        </NavLink>
        <NavLink className="NavLink" to={"/cart"}>
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
