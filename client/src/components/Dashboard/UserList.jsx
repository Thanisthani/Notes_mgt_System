import React, { useEffect, useState } from 'react'
import * as api from "../../api/index"
import BeatLoader from 'react-spinners/BeatLoader';
import Popup from './Popup';


function UserList() {
  const [users, setUsers] = useState([]);
  const [ousers,setOusers] =useState([]);
  const [puser, setPuser] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [searchInput, setSearchInput] = useState();

  // popup
  const toggleOpen = (user) => {
    console.log(user);
    setIsopen(!isOpen);
    setPuser(user); 
    
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    await console.log(ousers); 
    let newSearchUser = ousers.filter(user => (user.firstname.includes(searchInput.toLowerCase())
      || user.email.toLowerCase().includes(searchInput.toLowerCase())
      || user._id.toLowerCase().includes(searchInput.toLowerCase())
    ));
    console.log("neww swe", newSearchUser);
    setUsers(newSearchUser);
  //  await setUsers(newSearchUser);
  }
//  searchInput.toLowerCase()

  //   
  // 
  
const fetchUser = async() =>
{
  setisLoading(true);
  const { data } = await api.getAll();
  // await api.getAll().then(async (res) => {
  //   await setUsers(res.data);
  //  });
  await setUsers(data);
  setOusers(data);
  await setisLoading(false);
  }


  useEffect(() => {
  
    fetchUser();
    console.log("user",users);
  }, []);
  

    return (
      <div className='flex flex-col '>
        {isLoading ? <div className='mt-64 self-center '><BeatLoader loading={isLoading} color="#1e0e80" /> </div> :
          <div className=' self-center'>
            {/* search */}
            <div className='mt-8'>
              <form onSubmit={ 
                handleSearchSubmit
              }>
                <input type="text"
                  name='searchInput'
                  id="searchInput"
                  className='border-2 rounded-xl mt-2 p-2 text-sm w-[500px] border-blue-900'
                  placeholder='Search User by name, email, id '
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)} />
                <button type="submit" className='ml-8 uppercase  text-white text-sm bg-blue-700 hover:bg-blue-600 py-3 px-5 mr-6'>Search</button>
              </form>
            </div>

            {/* user list */}

          <div className='w-[350px]  pt-5 pb-10 flex flex-col ml-28 items-center px-10 overflow-hidden shadow-lg border-1 mt-20'>
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
            
            ))
              }
        
            </div>
            </div>
        }
        {/* <div className='fixed self-center bottom-28'>
          <Pagination page={page} pages={tpages} changePage={setPage} />
       </div> */}
      
            </div>
      
  )
}

export default UserList