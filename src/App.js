import './App.css';import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Error404 from './pages/Error404/Error404';
import FAQ from './pages/FAQ/FAQ';
import Point from './pages/Point/Point';
import Protect from './pages/Protect';
import Process from './pages/Process/Process';
import Community from './pages/Community/Community';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/process" element={<Process />} />
          <Route path="/community" element={<Community />} />
          <Route path="/point" element={<Point />} />
          <Route path="/protect" element={<Protect />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
