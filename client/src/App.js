import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateNote from './pages/CreateNote';
import UpdateNote from './pages/UpdateNote';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
          < Route path="/Login" exact element={<Login />} />
          < Route path="/dashboard" exact element={<Dashboard />} />
          < Route path="/" exact element={<Home />} />
          < Route path="/create" exact element={<CreateNote />} />
          < Route path="/update/:id" exact element={<UpdateNote />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App