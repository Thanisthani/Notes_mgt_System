import React from 'react';
import { Field, Formik } from "formik"
import * as Yup from 'yup';
import * as api from "../../api/index";
import { useNavigate } from 'react-router-dom';

function CreateForm() {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email must be required !"),
        accountType:Yup.string().required("Account type must be required !")
      });

    const onSubmit = async (values) => {
        await api.register(values).then(() => {
            navigate("/dashboard");
        })
        console.log(values);
    }
  return (
    <Formik initialValues={{
        email:"",
        accountType:"",
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
                
                <h2 className='mt-3 text-sm'>Account type</h2>
                
                    <div className='flex  '>
                <Field  className='border-2  mt-2 ml-2   border-blue-900'
                  type="radio"
                  name="accountType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Admin"
                    />
                    <div className='text-sm ml-2 mr-6 mt-2'>Admin</div>
                    
                    <Field  className='border-2 rounded-xl mt-2 p-2 text-sm  border-blue-900'
                  type="radio"
                  name="accountType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="User"
                     />
                 <div className='text-sm ml-2 mr-6 mt-2'>User</div>
                </div>
                <h6 className='text-red-500 text-sm mt-1'> {errors.accountType && touched.accountType && errors.accountType} </h6>
         <button type="submit" className="bg-blue-900 rounded-xl text-sm text-white mt-3 py-2 hover:font-medium w-full  hover:bg-white hover:border-2 hover:text-blue-900 hover:border-blue-900" disabled={isSubmitting}>
           Create user
         </button>
                </form>
            )
       }
  </Formik>
  )
}

export default CreateForm