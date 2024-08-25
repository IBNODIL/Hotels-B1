import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import useShowNavBar from './hooks/useShowNavBar';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const showNavBar = useShowNavBar();

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App