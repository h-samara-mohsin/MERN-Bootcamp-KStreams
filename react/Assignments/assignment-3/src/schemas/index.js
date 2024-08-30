import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const SignupDetailsSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("please enter a valid email").required(""),
    contactNumber: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRules,{message:"Please create a strong password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Password must match").required("Required")
})