import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const name = 'Aycan';
const age = 30;
const isLoggedIn = true;


function App() {
  return (
    <div className="App">
      <h1>{isLoggedIn ?  `${name} and ${age}` : 'logged out'}</h1>
      
     <Header />
    </div>
  );
}

export default App;
