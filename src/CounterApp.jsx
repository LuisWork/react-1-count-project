import React, { useState } from 'react'

export const CounterApp = () => {

  const [counter, setCounter] = useState(0)

  const counterIncrement = () => {
    setCounter(counter + 1)
  }

  const counterDecrement = () => {
    setCounter(counter - 1)

    if (counter <= 0) {
      setCounter(0)
    }
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>El valor del contador es: {counter}</p>
        <button onClick={ counterIncrement }>Counter Increment</button>
        <button onClick={ counterDecrement }>Counter Decrement</button>
      </div>
    </>
  )
}
