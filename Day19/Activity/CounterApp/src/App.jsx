import { useState, useEffect } from 'react'
import Title from './Components/Title'
import Buttons from './Components/Button'
import DisplayCount from './Components/DisplayCount'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count])
  return (
    <>
      <Title/>
      <DisplayCount count={count}/>
      <Buttons onDecrement={() => setCount(count - 1)} onIncrement={() => setCount(count + 1)}/>
    </>
  )
}

export default App
