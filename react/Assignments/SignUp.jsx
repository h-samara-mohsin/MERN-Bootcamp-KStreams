import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup)

const SignUp = () => {
  const navigate = useNavigate();
  const values = {
    name: "",
    email: "",
    cnumber: "",
    password: "",
    conpassword: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please Enter Your Full Name"),
    email: yup
      .string()
      .required("Please Enter Your Password")
      .email("Please Enter a Valid Email"),
    cnumber: yup.number().notRequired(),
    password: yup
      .string()
      .required("Please Enter Your Password")
      .min(8, "Password is too short should be 8 minimum characters").minUppercase(1).minNumbers(1),
    conpassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
  });
  const handleSubmit = (values) => {
    console.log("values: ", values);
    navigate("/cart");
  };
  return (
    <div className="container">
      <h1 className="text-center">SignUp Page</h1>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="col-md-12 mt-4">
            <Field
              type="text"
              name="name"
              placeholder="Enter Your Full Name *"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <Field
              type="email"
              name="email"
              placeholder="Enter Your Email *"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <Field
              type="text"
              name="cnumber"
              placeholder="Enter Your Contact Number"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="cnumber" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password *"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="col-md-12 mt-4">
            <Field
              type="password"
              name="conpassword"
              placeholder="Confirm Password *"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="conpassword" />
            </p>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
