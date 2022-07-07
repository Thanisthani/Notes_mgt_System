import React from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async() => {
    await dispatch({ type: 'LOGOUT' });
    navigate("/");

  }
    return (
      
      <div className='w-full h-16 flex justify-between items-center overflow-hidden shadow-lg px-20'>
          <h1>Admin Dashboard</h1>
          <div className='flex '>
          <Link to="/user"><div className='uppercase  text-white text-sm bg-blue-700 py-1 px-3 mr-6'>Create User account</div></Link>
          <button className='uppercase  text-white text-sm bg-blue-700 py-1 px-3' onClick={logOut}>Log out </button>
          </div>
            </div>
        
  )
}

export default Header