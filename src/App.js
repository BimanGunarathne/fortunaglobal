import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/rout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App