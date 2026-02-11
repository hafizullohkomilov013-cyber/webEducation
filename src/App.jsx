import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorldSkils from './components/WorldSkils'
import Form from './components/Form'
import Footer from './components/Footer'

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
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App

