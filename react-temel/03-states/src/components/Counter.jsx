import { useState } from 'react'

function Counter() {

  // declare the statement
  const [count, setCount] = useState(0);

  // functions
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1)
  };

  return (
    <div style={{marginLeft: 10 }}>
      <h1>Counter</h1>
      <h2>{ count }</h2>
      <br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;