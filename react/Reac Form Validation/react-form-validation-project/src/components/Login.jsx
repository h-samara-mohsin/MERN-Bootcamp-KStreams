import { useFormik } from "formik";
import React from "react";
import {loginSchema} from "../schemas/index";

const onSubmit = (values, actions) => {
  console.log("values: ", values);
  console.log("actions: ", actions);
  console.log("submitted");
};

const Login = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit
  });
  // console.log("values: ", values);
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}  
                // autoComplete="off"              
              >
                <div>
                  <label 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   htmlFor="name">
                    name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div >
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   htmlFor="email" >email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  />
                </div>
                <div >
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  
                  htmlFor="contactNumber">contactNumber</label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    id="contactNumber"
                    placeholder="xxxx-xxxxxxx"
                    value={values.contactNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div >
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  
                  htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="**********"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  />
                </div>
                <div >
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                   htmlFor="confirmPassword">confirmPassword</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="**********"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                  />
                </div>
                <button
                disabled={isSubmitting}
                  type="submit"
                  // onClick={onSubmit}
                  // className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
