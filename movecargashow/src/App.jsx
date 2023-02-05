import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <div className="bg">
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default App
