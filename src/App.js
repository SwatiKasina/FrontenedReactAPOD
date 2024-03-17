import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Navigation from './Nav';
import Footer from './footer';
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
