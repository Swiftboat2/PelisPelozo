import Navbar from './components/Navbar';
import Pelis from './components/Pelis';
import PeliInfo from './components/PeliInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

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
    <Route path="'/:title'" element={<PeliInfo />} />
    </Routes>
    </Router>
  )
}

export default App
