import Buttons from './Components/Button';
import Container from './Components/Container';
import DisplayCount from './Components/DisplayCount';
import Title from './Components/Title';
import React, {useState, useEffect} from 'react';
import './index.css'
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count]);

  return (
    <Container>
      <Title/>
      <DisplayCount count={count}/>
      <Buttons onDecrement={() => setCount(count - 1)} onIncrement={() => setCount(count + 1)}/>
    </Container>
  );
}

export default App;
