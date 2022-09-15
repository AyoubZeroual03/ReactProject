import * as yup from "yup";
export const LoginShema = yup.object({
   email:yup.string().email().required("incorrect email"),
   password:yup.string().min(8,'na9as').required("error password")
});