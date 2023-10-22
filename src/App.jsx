import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home'
import Listings from './Pages/Listings'
import Agents from './Pages/Agents'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/listings' element={<Listings/>}></Route>
          <Route path='/agents' element={<Agents/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
