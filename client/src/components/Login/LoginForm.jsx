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
              
              <h2 className='mt-4 text-sm'>Email</h2>
              
                  <input className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
              />
              
             <h6 className='text-red-500 text-sm mt-1'> {errors.email && touched.email && errors.email} </h6>
              
              <h2 className='mt-3 text-sm'>Password</h2>
              
              <input  className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                   />
              
              <h6 className='text-red-500 text-sm mt-1'>{errors.password && touched.password && errors.password}</h6>
              
       <button type="submit" className="bg-blue-900 rounded-xl text-sm text-white mt-3 py-2 hover:font-medium w-full  hover:bg-white hover:border-2 hover:text-blue-900 hover:border-blue-900" disabled={isSubmitting}>
         Log In
       </button>
              </form>
          )
     }
</Formik>
  )
}

export default LoginForm