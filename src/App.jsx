import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './Contexts/Theme';
import prayImg from "./assets/pray.png";
import emojiAbhay from "./assets/Abhay-bitmoji.png";
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
  // meta head tag toggle on active
  useEffect(() => {
    let title = document.querySelector("title");
    var link = document.querySelector("link[rel*='icon']");
    title.textContent = "Portfolio | Abhay Kumar";
    link.href = emojiAbhay;
    document.addEventListener('visibilitychange', function (event) {
      if (document.hidden) {
        // Create a new favicon URL
        title.textContent = "Hey Come Back !!";
        var newFaviconUrl = prayImg;
        // Set the 'href' attribute of the <link> element to the new favicon URL
        link.href = newFaviconUrl;
      } else {
        title.textContent = "Portfolio | Abhay Kumar";
        var newFaviconUrl = emojiAbhay;
        link.href = newFaviconUrl;
      }
    });

  })
  return (
    <>
      <ThemeProvider value={{ darkMode, toggleDarkMode }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
