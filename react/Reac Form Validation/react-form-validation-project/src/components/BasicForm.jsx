import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";
import "../../src/App.css"

const onSubmit = async(values,actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");
    await new Promise(resolve => setTimeout(resolve,1000))
    actions.resetForm()
}   

const BasicForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       age: "",
  //       password: "",
  //       confirmPassword: "",
  //     },
  //   });
  //   console.log(formik);
  //   return (
  //     <form autoComplete="off">
  //       <label htmlFor="email">Email</label>
  //       <input
  //         value={formik.values.email}
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         id="email"
  //         type="email"
  //         placeholder="Enter your email"
  //       />

  //       <label htmlFor="age">Age</label>
  //       <input
  //         value={formik.values.age}
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         id="age"
  //         type="number"
  //         placeholder="Enter your age"
  //       />

  // <label htmlFor="password">Password</label>
  //       <input
  //         value={formik.values.password}
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         id="password"
  //         type="password"
  //         placeholder="Enter your password"
  //       />

  // <label htmlFor="confirmPassword">Confirm Password</label>
  //       <input
  //         value={formik.values.confirmPassword}
  //         onChange={formik.handleChange}
  //         onBlur={formik.handleBlur}
  //         id="confirmPassword"
  //         type="password"
  //         placeholder="Enter your confirmPassword"
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  // ---------------xxxxxxxxxxxx----------------
  const { values, errors, touched, isSubmitting , handleBlur, handleChange,handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  //   console.log(formik);
  return (
    <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-errors" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age && touched.age ? "input-errors" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.age}</p>}


      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-errors" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.password}</p>}


      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Enter your confirmPassword"
        className={errors.confirmPassword && touched.confirmPassword ? "input-errors" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.confirmPassword}</p>}

      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
