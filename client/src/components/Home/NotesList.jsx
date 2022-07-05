import React , { useEffect, useState } from 'react'
import * as api from "../../api/index"
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

function NotesList() {
  const [notes,setNotes] = useState([]);
  const [isLoading,setisLoading] = useState(false);

  const fetchNotes = async () =>
  {
    setisLoading(true);
    const { data } = await api.getNote();
    setNotes(data);
    await setisLoading(false);
   
  }

  const deleteNote = async (id) => {
    await api.deleteNote(id).then(() =>fetchNotes());
  }

  useEffect(() => {
    fetchNotes();
    
  }, []);
  

  return (
    <div className='flex justify-center'>
      {isLoading ? <div className='mt-64 '><BeatLoader loading={isLoading} color="#1e0e80" /> </div> :
       <div className='w-[600px]  pt-5 pb-10 flex flex-col items-center px-10 overflow-hidden shadow-lg border-1 mt-20'>
       <h2 className='mb-5'>Notes</h2>

       {notes.map((note) =>
       (
         <div key={note._id} className='flex justify-between w-[500px] border-b-4 py-3'>
           <h5>{note.title}</h5>
           <div className='flex '>
           <Link to={`/update/${note._id}`}>
               <h5 className='uppercase  text-white text-sm bg-green-800 py-1 px-3 mx-5' > Update</h5>
               </Link>
             <button className='uppercase  text-white text-sm bg-red-800 py-1 px-3' onClick={() => deleteNote(note._id)}> Delete</button>
           </div> 
         </div>

       ))}

     </div>
      }
      {/*         
          <div className='flex justify-between w-[500px] border-b-4 py-3' >
                  <h5>qbflirbiuubfarfbdo;n</h5>
                  <div className='flex '>
                  <h5 className='uppercase  text-white text-sm bg-green-800 py-1 px-3 mx-5'> Update</h5>
                  <h5 className='uppercase  text-white text-sm bg-red-800 py-1 px-3'> Delete</h5>
                  </div>
          </div> */}
    </div>
   
  )
}

export default NotesList