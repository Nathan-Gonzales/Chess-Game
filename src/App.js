import './App.css';
import Navbar from './components/Navbar.js'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'





function App() {
  return (
    <div className="wrap">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
