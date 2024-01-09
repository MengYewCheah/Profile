import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './routes/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
