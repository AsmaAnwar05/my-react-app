import './App.css'
import Navbar from './components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <>
    <Navbar/>
  <div>
    <button onClick={() => dispatch(multiply(2))}>*2</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    Currently count: {count}
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(incrementByAmount(4))}>+4</button>
  </div>
    </>
  )
}

export default App
