import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './routes/Navbar';
import Home from './routes/Home';
import Footer from './routes/Footer';
import CoinGeckoAPI from './routes/CoinGeckoAPI';

function App() {
  return (
    <div className='Body'>
      <Navigation/>
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/coinGeckoAPI" element={<CoinGeckoAPI />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
