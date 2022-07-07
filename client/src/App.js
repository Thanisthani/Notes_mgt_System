import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateNote from './pages/CreateNote';
import UpdateNote from './pages/UpdateNote';
import CreateUser from './pages/CreateUser';
import AddDetails from './pages/AddDetails';


function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          < Route path="/" exact element={<Login />} />    
          < Route path="/dashboard/:pageno" exact element={<Dashboard />} />
          < Route path="/home/:pageno" exact element={<Home />} />
          < Route path="/create" exact element={<CreateNote />} />
          < Route path="/update/:id" exact element={<UpdateNote />} />
          < Route path="/user" exact element={<CreateUser />} />
            < Route path="/add" exact element={<AddDetails />} />
          

        

        </Routes>
      </Router>
    </div>
  )
}

export default App