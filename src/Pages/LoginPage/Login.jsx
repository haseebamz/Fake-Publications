import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

const Login = () => {
  const LoginSchema = Yup.object().shape({
    phone: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const loginUser = async (phone, password) => {
    try {
      const response = await axios.post(
        "/api/Account/user/fetchlogin",
        {
          PhoneNumber: phone,
          Password: password,
          LoginAction: "login",
        },      
        {
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json-patch+json",
            "api-security-key": import.meta.env.VITE_API_KEY, // keep it in .env
          },
        }
      );

      console.log("Login success:", response.data);
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container">
      <div>
        <Formik
          initialValues={{
            phone: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await loginUser(values.phone, values.password);
          }}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <label htmlFor="phone">Phone*</label>
              <PhoneInput
                defaultCountry="pk"
                name="phone"
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
                className="input-fields" 
              />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

              <label htmlFor="password"> Password* </label>
              <Field name="password" type="password" className="input-fields"  />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <button type="submit" className="d-block CustomBtn  login_formBtn "  >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
