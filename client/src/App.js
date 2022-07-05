import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
          < Route path="/Login" exact element={<Login />} />
          < Route path="/dashboard" exact element={<Dashboard />} />
          < Route path="/" exact element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App