import { Router } from 'react-router-dom';
import './App.css';
import './components/Navbar';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Laptop-shop</h1>
      <Navbar/>
    </div>
  );
}

export default App;
