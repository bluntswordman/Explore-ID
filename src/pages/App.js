import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home/Home";
import Location from "./Location/Location";
import GelLocation from "./Form/GelLocation";
import CreateGelLocation from "./Form/CreateGelLocation";
import Cok from "./Form/Cok";
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
            <Route path="/getod" element={<GelLocation/>}/>
            <Route path="/craeted" element={<CreateGelLocation/>}/>
            <Route path="/cok" element={<Cok/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
