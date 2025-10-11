import { useState } from 'react'
import Navbar from './components/Navbar'
import CounterContext from './context/context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <Navbar />
      </CounterContext.Provider>
    </>
  )
}

export default App
