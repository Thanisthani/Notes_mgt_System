import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        < Route path="/" exact element={<Home/>} />
        < Route path="/Login" exact element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App