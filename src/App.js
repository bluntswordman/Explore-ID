import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Location, Login, Register, Dashboard, } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
