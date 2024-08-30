import { useField } from 'formik'
import React from 'react'
import '../../src/App.css'

const CustomInput = ({label, ...props}) => {
    const [field, meta, helpers] =  useField(props)
    console.log("field", field)
    console.log("meta",meta)

  return (
    <>
    <label >{label}</label>
    <input {...field} {...props} className={meta.touched && meta.error ? "input-errors" : ""}/>
    {meta.touched && meta.error && <div className='error'>{meta.error}</div> }
    </>
  )
}

export default CustomInput
