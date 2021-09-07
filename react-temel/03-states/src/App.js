import { useState } from 'react';

function App() {

  //* basic examples of useState 
  const [name, setName] = useState('Aycan'); // default parameter is 'Aycan'
  const [age, setAge] = useState(31);

  // useState with arrays
  const [friends, setFriends] = useState(['Aycan', 'Selin']);

  // useState with objects
  const [address, setAddress] = useState({title: 'Izmir', zip: 35330});

  return (
    <div className="App">
    
    {/* name and age state update */}
    <h1>Yo Sup? {name}</h1>
    <h2>My age is: {age}</h2>
    <button onClick={() => setName('Mama Mia..')}>Change Name</button> {/* arrow functions runs on click */}
    <button onClick={() => setAge(32)}>Change Age</button>

    <br /><hr /><br />
    
    {/* state update with arrays */}
    <h2>Friends</h2>

    {friends.map((friend, key) => (
      <h4 key={key}>{friend}</h4>
    ))}

    <button onClick={() =>{ setFriends([...friends, 'Elvan'])}}>Add Friend</button>

    <br /><hr /><br />

    {/* state update with objects */}
    <h2>Address</h2>

    <div>{address.title}, {address.zip}</div>
    <br />
    <button onClick={() =>{ setAddress({...address, title: 'Istanbul'})}}>Change Address</button>

    <br /><hr /><br />
    
    </div>
  );
}

export default App;
