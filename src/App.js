import React from 'react'
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './components/rout'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>

    </div>
  )
}

export default App