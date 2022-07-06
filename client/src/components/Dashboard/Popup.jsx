import React, { useEffect } from 'react';
import moment from 'moment';

function Popup({puser,show,handle}) {
    useEffect(() => {
        // console.log(puser);
        
      }, []);

    return (
    <>
{show &&
        <div className=' bg-black/25 flex w-full h-full fixed top-0 left-0 justify-center pt-36'>
            <div className='relative bg-white rounded-md w-[450px] h-[300px] pb-5 pt-3 pl-9 pr-5 flex flex-col'>
                <button className='border-2  border-black rounded-full self-end px-2 hover:bg-black hover:text-white cursor-pointer ' onClick={handle} >X</button>
                <div className='self-center mb-3 text-lg'>User details</div>
                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Firstname :</h6>
                    <h6>{puser.firstname}</h6>
                </div>

                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Lastname :</h6>
                    <h6>{puser.lastname}</h6>
                </div>
              
                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Email :</h6>
                    <h6>{puser.email}</h6>
                </div>
              {/* moment().format('MMMM Do YYYY, h:mm:ss a').split(',')[0] */}

                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Date Of Birth :</h6>
                    <h6>{moment(puser.dateOfBirth).format('MMMM Do YYYY, h:mm:ss a').split(',')[0]}</h6>
                </div>
                    
                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Mobile Number :</h6>
                    <h6>{puser.mobile}</h6>
                </div>

                <div className='flex'>
                    <h6 className='mb-2 mr-2'>Account type :</h6>
                    <h6>{puser.accountType}</h6>
                </div>

            </div>
                  
                </div>
            }
      
      </>
  )
}

export default Popup