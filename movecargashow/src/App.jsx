import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './routes';
import './App.css'


function App() {

  return (
    <div className="App" >
      <div className="bg">
        <Navbar/>
        <Routes />
        <Footer/>
      </div>
    </div>
  )
}

export default App
