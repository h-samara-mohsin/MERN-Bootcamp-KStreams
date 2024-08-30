import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// THIS Regular expression Means: min 5 characters, 1 upper case ,1 lower case, 1 numeric digit

export const loginDetailsSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required(),
    password: yup.string().min(5).matches(passwordRules).required(),
})