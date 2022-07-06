import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as api from "../../api/index";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

function AddForm() {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState();
  const [dob, setdob] = useState(new Date());

  const navigate = useNavigate();
  
    const validationSchema = Yup.object({
        firstname: Yup.string().required("Email must be required !"),
        password: Yup.string().required("Password must be required !")
      });
    
  const onSubmit = async (values) => {
    await api.addUserDetails(
      {
        firstname: values.firstname,
        lastname: values.lastname,
        dateOfBirth:dob,
        mobile: mobile,
        password: values.password
      }
    ).then((response) => {
      dispatch({ type: 'LOGOUT' });
      navigate("/login");
    });
    
    console.log(values);
    } 
    
  return (
    <Formik initialValues={{
          firstname: "",
          lastname: "",
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
                
                    {/* firstname */}
                <h2 className='mt-4 text-sm'>Firstname</h2>
                
                    <input className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
               type="text"
               name="firstname"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.firstname}
                />
                
                    <h6 className='text-red-500 text-sm mt-1'> {errors.firstname && touched.firstname && errors.firstname} </h6>
                    
                    {/* lastname */}

                    <h2 className='mt-4 text-sm'>Lastname</h2>
                
                    <input className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
               type="text"
               name="lastname"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.lastname}
                />
                
                    <h6 className='text-red-500 text-sm mt-1'> {errors.lastname && touched.lastname && errors.lastname} </h6>

                    {/* dateOfBirth */}

                    <h2 className='mt-4 text-sm'>Date Of Birth</h2>
                
                    {/* <input className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
               type="text"
               name="lastname"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.lastname}
                /> */}
                
                <DatePicker className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900' selected={dob} onChange={(date) => setdob(date)} />
                    
                    {/* Mobile number */}
                    

                    <h2 className='mt-4 text-sm'>Mobile number</h2>
                    

                    <PhoneInput
                        className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
                        placeholder="Enter phone number"
                        value={mobile}
                        onChange={setMobile}
                        defaultCountry="LK"/>
                    
                    
                    {/* Password */}
                
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
           Add details 
         </button>
                </form>
            )
       }
  </Formik>
  )
}

export default AddForm