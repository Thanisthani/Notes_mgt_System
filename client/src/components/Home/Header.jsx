import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async() => {
    await dispatch({ type: 'LOGOUT' });
    navigate("/");

  }
  return (
    <div className='w-full h-16 flex bg-gray-800 justify-between items-center overflow-hidden shadow-lg px-20'>
      <h1 className='text-white'>My Notes</h1>
      <div className='flex'>
        <Link to="/create"><div className='uppercase  text-white text-sm bg-cyan-800 py-1 px-3 mx-5'>Create Note </div></Link>
        <button className='uppercase  text-white text-sm bg-blue-700 py-1 px-3' onClick={logOut}>Log out </button>
      </div>
    </div>
  )
}
export default Header