import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPopup({ show, error,handle }) {
    const navigate = useNavigate();

    const handlenavigate = () => {
        
        navigate("/login");
    }
  return (
    <>
    {show &&
            <div className=' z-50 bg-black/25 flex w-full h-full fixed top-0 left-0 justify-center pt-36'>
                <div className='relative bg-white rounded-md w-[450px] h-[150px] pb-5 pt-3 pl-9 pr-5 flex flex-col'>
                    
                      <div className='self-center mb-3 mt-6 text-lg text-red-600'>{ error}</div>
                      <button className='self-center bg-blue-900 rounded-xl text-sm text-white mt-3 py-2  hover:font-medium  hover:bg-white hover:border-2 hover:text-blue-900 hover:border-blue-900 w-28 ' onClick={() => {
                          handle()
                      }} >Try again</button>
                   
                </div>
                      
                    </div>
                }
          
          </>
  )
}

export default ErrorPopup