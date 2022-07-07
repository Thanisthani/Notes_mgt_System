import React from 'react'
import Header from '../components/Home/Header'
import NotesList from '../components/Home/NotesList'
import { useParams } from 'react-router-dom';

function Home() {
  const { pageno } = useParams();
  return (
      <div>
      <Header />
      <NotesList pageno={pageno} />
    </div>
  )
}

export default Home