import React from 'react'
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>

    </div>
  )
}

export default App