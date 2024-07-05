import React, { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import './styles/global.css';

function App() {

  return (
    <div>
      <TopNav/>
      <Home/>
    </div>
  )
}

export default App;