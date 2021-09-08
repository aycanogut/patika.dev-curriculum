import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  // for useEffect
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Aycan');

  // for unmounting
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // console.log('state updated');
  });

  // dependency array
  useEffect(() =>{
    // console.log('component mounted');
  }, []);

  // only works when 'name' state updated
  useEffect(() =>{
    // console.log('name state mounted');
  }, [name]);
  
  // only works when 'number' state updated
  useEffect(() =>{
    // console.log('number state mounted');
  }, [number]);

  // only works when both states updated
  useEffect(() =>{
    // console.log('number or name state mounted');
  }, [number, name]);

  return (
    <div className="App">
     <h1>{number}</h1>
     <button onClick={()=> setNumber(number + 1)}>Change</button>
     <h1>{name}</h1>
     <button onClick={()=> setName('Not Aycan')}>Change</button>
     
     <br />

    {/* counter for unmount event */}
    {isVisible && <Counter />}

    <button onClick={() => setIsVisible(!isVisible)}>Unmount Component</button>
    </div>

  );
}

export default App;
