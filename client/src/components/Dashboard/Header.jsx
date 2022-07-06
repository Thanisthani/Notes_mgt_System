import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
      
      <div className='w-full h-16 flex justify-between items-center overflow-hidden shadow-lg px-20'>
          <h1>Admin Dashboard</h1>
          <div>
          <Link to="/user"><div className='uppercase  text-white text-sm bg-blue-700 py-1 px-3'>Create User account</div></Link>
          </div>
            </div>
        
  )
}

export default Header