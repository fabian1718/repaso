import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <p>____________________________</p>
      <Login />
    </>
  )
}

export default App
