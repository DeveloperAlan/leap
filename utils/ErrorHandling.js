import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const postcodeRegExp = /\d{4}/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name required"),
  lastName: Yup.string().required("Last Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number required"),
  postcode: Yup.string()
    .matches(postcodeRegExp, "Postcode is not valid")
    .required("Postcode required"),
  state: Yup.string().required("State required"),
  companyName: Yup.string().optional(),
  abn: Yup.string().optional(),
  rate: Yup.number()
    .required("Hourly Rate required")
    .test(
      "maxDigitsAfterDecimal",
      "Hourly Rate must have 2 digits after decimal or less",
      (number) => /^\d+(\.\d{1,2})?$/.test(number)
    ),
  dob: Yup.date().required("Date of Birth required"),
});

export default SignupSchema;
