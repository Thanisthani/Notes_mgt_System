import React from 'react'

function UserList() {
    return (
      <div className='flex justify-center'>
      <div className='w-[350px]  pt-5 pb-10 flex flex-col items-center px-10 overflow-hidden shadow-lg border-1 mt-20'>
          <h2 className='mb-5'>User List</h2>
          <div className='flex justify-between w-[260px] border-b-4 py-3'>
              <h5> Thanis</h5>
              <h5>Admin</h5>
          </div>
          <div className='flex justify-between w-[260px] border-b-4 py-3' >
              <h5> Kumar</h5>
              <h5> User</h5>
          </div>
            </div>
            </div>
  )
}

export default UserList