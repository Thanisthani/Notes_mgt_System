import React from 'react';
import { useNavigate } from 'react-router-dom';

function SucessPopup({ show }) {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }
  return (
    <>
    {show &&
            <div className=' z-50 bg-black/25 flex w-full h-full fixed top-0 left-0 justify-center pt-36'>
                <div className='relative bg-white rounded-md w-[450px] h-[150px] pb-5 pt-3 pl-9 pr-5 flex flex-col'>
                    
                      <div className='self-center mb-3 mt-6 text-lg'>Sucessfully added details</div>
                      <button className='self-center bg-blue-900 rounded-xl text-sm text-white mt-3 py-2 hover:font-medium   hover:bg-white hover:border-2 hover:text-blue-900 hover:border-blue-900 w-20 ' onClick={logout} >OK</button>
                   
                </div>
                      
                    </div>
                }
          
          </>
  )
}

export default SucessPopup