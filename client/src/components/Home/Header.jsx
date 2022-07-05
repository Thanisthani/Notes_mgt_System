import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-16 flex justify-between items-center overflow-hidden shadow-lg px-20'>
    <h1>My Notes</h1>
          <div className='flex'>
              <Link to="/"><div className='uppercase  text-white text-sm bg-cyan-800 py-1 px-3 mx-5'>Create Note </div></Link>
              <Link to="/"><div className='uppercase  text-white text-sm bg-blue-700 py-1 px-3'>Log out </div></Link>
          </div>
      </div>
  )
}

export default Header