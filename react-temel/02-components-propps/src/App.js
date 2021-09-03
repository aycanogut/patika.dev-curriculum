import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const name = 'Aycan';
const surname = 'Ogut';
const age = 30;
const isLoggedIn = true;
const friends = [
  {
    id: 0,
    name: 'Selin'
  },
  {
    id: 1,
    name: 'Aycan'
  },
  {
    id:2,
    name: 'Ozan'
  }, 
  { id:3,
    name: 'Rob'
  },
  ];


function App() {
  return (
    <div className="App"> 
     <Header />
     <User 
     name={name}
     surname={surname}
     age={age} 
     isLoggedIn={isLoggedIn}
     friends={friends} address={{
       town: 'izmir',
       zip: 12331,
     }}/>
    </div>
  );
}

export default App;
