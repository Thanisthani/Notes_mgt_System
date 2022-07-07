import React from 'react';
import Header from '../components/Dashboard/Header';
import UserList from '../components/Dashboard/UserList';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { pageno } = useParams();
  return (
      <div className=''>
          
      <Header />
      <UserList pageno={pageno} />
    </div> 
  )
}

export default Dashboard