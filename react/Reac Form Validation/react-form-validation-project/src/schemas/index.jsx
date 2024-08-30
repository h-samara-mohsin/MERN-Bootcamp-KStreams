import * as yup from "yup";

const passwordRules  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 Char , 1 upper case letter , 1 lower case , 1 numeric digit

export const basicSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required("Required"),
    age : yup.number().positive().integer().required("Required"),
    password : yup.string().min(5).matches(passwordRules,{message: "Please create a stronger password"}).required("Required"),
    confirmPassword : yup.string().oneOf([yup.ref("password"),null],"Password must match").required("Required"),
})

export const advancedSchema = yup.object().shape({
    username: yup.string().min(3).required(""),
    jobType : yup.string().oneOf(["designer","developer","manager","other"]).required("Required"),
    acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of services")
})

const loginSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("please enter a valid email").required(""),
    contactNumber: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRules,{message:"Please create a strong password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Password must match").required("Required")
})