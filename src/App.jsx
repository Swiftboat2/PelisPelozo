import Navbar from './components/Navbar';
import Pelis from './components/Pelis';
import PeliInfo from './components/PeliInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TrailerPeli from './components/TrailerPeli';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={
    <>
    <Navbar  />
    <Pelis />
    </>
    } 
     />
    <Route path='/peli/:id' element={<PeliInfo />} />
    <Route path='/trailers/:id' element={<TrailerPeli />} />
    </Routes>
    </Router>
  )
}

export default App