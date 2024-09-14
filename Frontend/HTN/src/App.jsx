import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import './App.css'

// new
import React from 'react';
import NetworkGraph from './NetworkGraph';

function App() {

  return (
    <div>
      <Navbar/>
      <Card/>

      <h1>Network Graph with D3.js in React</h1>
      <div className="graph-container">
        <NetworkGraph />
        <NetworkGraph />
      </div> 
    </div>
  )
}

export default App
