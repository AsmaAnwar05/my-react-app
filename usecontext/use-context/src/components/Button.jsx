import React, { useContext } from 'react'
import Component1 from './component1'
import CounterContext from '../context/context'

const Button = () => {
  const value = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        I am Button
      </button>
    </div>
  )
}

export default Button
