import { Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username:"", jobType:"", acceptedTos: false }}
      validationSchema={advancedSchema}
      // onSubmit={(values, actions) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     actions.setSubmitting(false);
      //   }, 1000);
      // }}
    >
      {(props) => (
        //   <form onSubmit={props.handleSubmit}>
        <Form>    
            <CustomInput
            label = "Username" 
            name = "Username"
            type = "text"
            placeholder =
             "ENTER Username"
            />
          {/* <Field type="text" name="name" placeholder="Name" /> */}

          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
          <button type="submit">Submit</button>
        </Form>

        //   </form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
