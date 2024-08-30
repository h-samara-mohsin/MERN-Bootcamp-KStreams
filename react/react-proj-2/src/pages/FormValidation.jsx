import { Field, Formik } from 'formik'
import React, { Fragment } from 'react'
import { Form } from 'react-router-dom'

const FormValidation = () => {

    const defaultValue = {
        name: "",
        email: "",
        password: "",
    }

  return (
    <Fragment>
        <h1>form page</h1>
        <h1>Form validation with Formik and Yup Library</h1>
        {/* <Formik>
            <Form>
                <Field type="text" name="name" placeholder="Enter your name"></Field>
                <Field type="text" name="email" placeholder="Enter your email"></Field>
                <Field type="text" name="password" placeholder="Enter your password"></Field>

            </Form>
        </Formik> */}
    </Fragment>
  )
}

export default FormValidation
