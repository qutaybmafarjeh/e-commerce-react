

 import * as yup from "yup";


 export const resgisterSchema = yup.object({
    userName: yup.string().required().min(3).max(30),
    fullName: yup.string().required().min(3).max(30),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required()
  })
