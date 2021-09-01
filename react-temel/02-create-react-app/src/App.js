import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const name = 'Aycan';
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
     <User name='Aycan' surname='Ogut' age={30} isLoggedIn={true} friends={friends}/>
    </div>
  );
}

export default App;
