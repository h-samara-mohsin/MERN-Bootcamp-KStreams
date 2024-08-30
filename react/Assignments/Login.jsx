import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const Login = () => {
    const navigate = useNavigate();
    const values = {
        email: "",
        password: ""
    }
    const validationSchema = yup.object().shape({
        email: yup.string().required("Please Enter Your Email").email("Please Enter Valid Email"),
        password: yup.string().required("Please Enter Your Password")
    })
    const handleSubmit = (values) => {
        console.log("values: ",values);
        navigate('/cart');
    }
  return (
    <div className='container'>
      <h1 className='col-md-12 mt-4 text-center'>Login Page</h1>
        <Formik initialValues={values} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <div className="col-md-12 mt-4">
                    <Field type="email" name="email" placeholder="Enter Your Email" className="form-control"/>
                    <p className='text-danger'>
                        <ErrorMessage name='email'/>
                    </p>
                </div>
                <div className="col-md-12 mt-4">
                    <Field type="password" name="password" placeholder="Enter Your Password" className="form-control"/>
                    <p className='text-danger'>
                        <ErrorMessage name='password'/>
                    </p>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login
