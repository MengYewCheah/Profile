import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navbar from './routes/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About/>} />
    </div>
  );
}

export default App;
