import { Route, Routes } from 'react-router-dom'

import Intro from './Pages/Intro'
import Home from './Pages/Home'

import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
  )
}

export default App
