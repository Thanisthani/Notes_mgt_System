import React, { useEffect, useState } from 'react'
import * as api from "../../api/index"
import BeatLoader from 'react-spinners/BeatLoader';
import Popup from './Popup';
import Pagination from '../Pagination/Pagination';

function UserList({pageno}) {
  const [users, setUsers] = useState([]);
  const [puser, setPuser] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [page, setPage] = useState(pageno);
  const [tpages, setTpages] = useState();

  // popup
  const toggleOpen = (user) => {
    console.log(user);
    setIsopen(!isOpen);
    setPuser(user); 
    
  };

  
 
  useEffect(() => {
    const fetchUser = async () =>
    {
      setisLoading(true);
      // const { data } = await api.getAll();
      await api.getAll(page).then(async (res) => {
        await setUsers(res.data.data);
         setTpages(res.data.pages);
       });
      await setisLoading(false);
      }
      fetchUser();
    },[page]);
    return (
      <div className='flex justify-center'>
        {isLoading ? <div className='mt-64 '><BeatLoader loading={isLoading} color="#1e0e80"/> </div> :
          <div className='w-[350px]  pt-5 pb-10 flex flex-col items-center px-10 overflow-hidden shadow-lg border-1 mt-20'>
            <h2 className='mb-5'>User List</h2>
            {users.map((user) =>
            (
              <div key={user._id}>
                {/* popup */}
                <Popup puser={ puser} show={isOpen} handle={() => setIsopen(false)} />
                
                <button key={user._id} className='flex hover:bg-blue-100 px-4 justify-between w-[260px] border-b-4 py-3'
                  onClick={() => toggleOpen(user)}>
                  <h5> {user.firstname}</h5>
                  <h5>{user.accountType}</h5>
                </button>

                
                

              </div>
            
            ))}
        
          </div>
        }
        <div className='fixed bottom-28'>
          <Pagination page={page} pages={tpages} changePage={setPage} />
       </div>
      
            </div>
      
  )
}

export default UserList