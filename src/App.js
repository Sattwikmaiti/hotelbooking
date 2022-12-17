import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home.js'
import List from './components/List.js'
import Hotel from './components/Hotel.js'

const App = () => {
  return (
    <Router>
     
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/hotel/:id" element={<Hotel/>}></Route>
    
    </Routes>
      
  
    </Router>
  )
}

export default App
