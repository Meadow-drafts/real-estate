import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  )
}

export default App
