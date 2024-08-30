import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginDetailsSchema } from "../schemas";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();

  // const LoginForm = () => {
  //   const {values, handleBlur, handleChange, handleSubmit}   = useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: loginDetailsSchema
  //   })
  // }
  return (
    <>
      <div>
        {/* <h1>Login Page</h1> */}

        {/* <form action="">
        <input type="text" value= />
      </form> */}
        {/* <button 
      onClick={() => {
        setUserDetails({
          name: "Samara",
          email:"sam5@gmail.com",
          isLoggedIn :true
        })
        navigate("/")
      }}
      >Login</button> */}
      </div>
      {/*  login card */}
      <LoginForm/>
      {/*  */}
      
    </>
  );
};

export default Login;
