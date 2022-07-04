import React from 'react';
import { Formik } from "formik"
import * as Yup from 'yup';

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email must be required !"),
    password: Yup.string().required("Password must be required !")
  });
  
  return (
    <Formik initialValues={{
      email: "",
      password: "",
    }}
        validationSchema={validationSchema}
    onSubmit={(values) => {console.log(values)}}>
      {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              
              <h2>Email</h2>
              
                  <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
              />
              
              {errors.email && touched.email && errors.email}
              
              <h2>Password</h2>
              
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                   />
              
              <h3>{errors.password && touched.password && errors.password}</h3>
              
       <button type="submit" className="bg-blue-500 text-white" disabled={isSubmitting}>
         Submit
       </button>
              </form>
          )
     }
</Formik>
  )
}

export default LoginForm