import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
function Rout() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Rout