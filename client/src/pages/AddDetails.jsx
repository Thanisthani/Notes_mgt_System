import React from 'react'
import AddForm from '../components/AddDetails/AddForm'

function AddDetails() {
  return (
    <div className='flex flex-col items-center mt-28 drop-shadow-2xl border-0 rounded-3xl '>
    <div className=' bg-white
       flex flex-col items-center pt-10 w-[400px] h-[600px]'>
          <h1 className='text-lg'>Add your details</h1>
          <AddForm />
      </div>
      </div>
  )
}

export default AddDetails