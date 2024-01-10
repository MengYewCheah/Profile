import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './routes/Navbar';
import Home from './routes/Home';

function App() {
  return (
    <div className='Body'>
      <Navigation/>
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;