import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'





function App() {
  return (
    <div className="wrap">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
