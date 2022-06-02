import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home/Home";
import Location from "./Location/Location";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/location" element={<Location/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
