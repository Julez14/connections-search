import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import About from './Components/About'
import InputBar from './Components/InputBar'
import UserLookup from './Components/UserLookup'
import Footer from './Components/Footer'
import NetworkGraph from './Components/NetGraph'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Card/>
      <InputBar/>
      <UserLookup/>
      <About/>
      <NetworkGraph/>
      <Footer/>
      
    </div>
  )
}

export default App
