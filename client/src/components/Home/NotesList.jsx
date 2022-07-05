import React from 'react'

function NotesList() {
  return (
    <div className='flex justify-center'>
      <div className='w-[600px]  pt-5 pb-10 flex flex-col items-center px-10 overflow-hidden shadow-lg border-1 mt-20'>
          <h2 className='mb-5'>Notes</h2>
          <div className='flex justify-between w-[500px] border-b-4 py-3'>
                  <h5>uviugfwoiuqoibfsdlibofd</h5>
                  <div className='flex '>
                  <h5 className='uppercase  text-white text-sm bg-green-800 py-1 px-3 mx-5'> Update</h5>
                  <h5 className='uppercase  text-white text-sm bg-red-800 py-1 px-3'> Delete</h5>
                  </div>
                  
              
          </div>
          <div className='flex justify-between w-[500px] border-b-4 py-3' >
                  <h5>qbflirbiuubfarfbdo;n</h5>
                  <div className='flex '>
                  <h5 className='uppercase  text-white text-sm bg-green-800 py-1 px-3 mx-5'> Update</h5>
                  <h5 className='uppercase  text-white text-sm bg-red-800 py-1 px-3'> Delete</h5>
                  </div>
          </div>
            </div>
            </div>
  )
}

export default NotesList