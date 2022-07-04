import React from 'react';
import { Formik } from "formik"
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/auth';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email must be required !"),
    password: Yup.string().required("Password must be required !")
  });

  const onSubmit = (values) => {
    dispatch(login(values, navigate));
  }  
  
  return (
    <Formik initialValues={{
      email: "",
      password: "",
    }}
        validationSchema={validationSchema}
    onSubmit={(values) => {onSubmit(values)}}>
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