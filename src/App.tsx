import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/pages/Header'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Home />
      {/* <Footer/> */}
        </>
  )
}

export default App
