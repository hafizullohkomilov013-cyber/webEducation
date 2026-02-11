import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorldSkils from './components/WorldSkils'
import Form from './components/Form'

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <WorldSkils/>
        <Form/>
      </main>
    </>
  )
}

export default App

