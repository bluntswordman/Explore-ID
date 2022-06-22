import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Location, Login, Register, Dashboard, LandingPage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/location" element={<Location/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
