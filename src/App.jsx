import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      setDarkMode(false);
      htmlElement.classList.remove('dark');
    }
    else {
      setDarkMode(true);
      htmlElement.classList.add('dark');
    }
  }
  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Navbar>
      <Outlet></Outlet>
      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Footer>
    </>
  )
}

export default App
