import {useState} from 'react'

const increment = (state: number) => state + 1
const decrement = (state: number) => state - 1

export const useCounter = () => {
  const [count, setCount] = useState(0)
  return {
    count,
    increment: () => setCount(increment),
    decrement: () => setCount(decrement),
  }
}
