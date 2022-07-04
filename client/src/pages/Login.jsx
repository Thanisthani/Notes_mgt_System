import React from 'react'
import LoginForm from '../components/Login/LoginForm'

function Login() {
  return (
    <div className='flex flex-col items-center mt-28 drop-shadow-2xl border-0 rounded-3xl '>
    <div className=' bg-white
       flex flex-col items-center pt-10 w-[400px] h-[350px]'>
          <h1 className='text-lg'>Login</h1>
          <LoginForm />
      </div>
      </div>
  )
}

export default Login