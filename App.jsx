import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import LandingPanel from './panel/LandingPanel'
import AdminPanel from './panel/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<LandingPanel/>}></Route>
       <Route path='admin-panel/*' element={<AdminPanel/>}></Route>
    
    </Routes>

      
      </BrowserRouter>
    </>
  )
}

export default App
