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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
