import React from 'react';
import UpdateForm from '../components/UpdateNote/UpdateForm';
import { useParams } from 'react-router-dom';

function UpdateNote() {
    const { id } = useParams();
  return (
    <div className='flex flex-col items-center mt-28 drop-shadow-2xl border-0 rounded-3xl '>
      <div className=' bg-white
         flex flex-col items-center pt-10 w-[400px] h-[350px]'>
            <h1 className='text-lg'>Update Form</h1>
           <UpdateForm id={id} />
        </div>
        </div>
  )
}

export default UpdateNote