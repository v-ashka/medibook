import { Component, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/pages/Header'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
import { Button, ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'

function App() {
  // const [count, setCount] = useState(0)
  const [dataTh, setDataTh] = useState(localStorage.getItem('dataTh') || 'system');

  const currentDataThValue = document.documentElement;
  currentDataThValue.setAttribute('data-th', dataTh);
  return (
    <>
      <Header />
      <Home />
      <Footer/>
        </>
  )
}

export default App
