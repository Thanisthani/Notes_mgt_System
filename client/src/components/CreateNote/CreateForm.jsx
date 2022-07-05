import React from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import * as api from "../../api/index";
import { useNavigate } from 'react-router-dom';

function CreateForm() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        title: Yup.string().required("Title must be required"),
        description: Yup.string().required("Description must be required !")
    }); 

    const onSubmit = async(values) => {
        await api.createNote(values).then(() =>
        {
            navigate("/");
})
        
    }
  return (
    <Formik initialValues={{
        title: "",
        description: "",
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
                
                <h2 className='mt-4 text-sm'>Title</h2>
                
                    <input className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
               type="text"
               name="title"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.title}
                />
                
               <h6 className='text-red-500 text-sm mt-1'> {errors.title && touched.title && errors.title} </h6>
                
                <h2 className='mt-3 text-sm'>Description</h2>
                
                <textarea  className='border-2 rounded-xl mt-2 p-2 text-sm w-[300px] border-blue-900'
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                     />
                
                <h6 className='text-red-500 text-sm mt-1'>{errors.description && touched.description && errors.description}</h6>
                
         <button type="submit" className="bg-blue-900 rounded-xl text-sm text-white mt-3 py-2 hover:font-medium w-full  hover:bg-white hover:border-2 hover:text-blue-900 hover:border-blue-900" disabled={isSubmitting}>
           Create Note
         </button>
                </form>
            )
       }
  </Formik>
  )
}

export default CreateForm