import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must have at least 3 characters")
    .max(50, "Name is too long")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Message is required"),
});
