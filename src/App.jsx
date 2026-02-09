import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorldSkils from './components/WorldSkils'

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <WorldSkils/>
      </main>
    </>
  )
}

export default App

