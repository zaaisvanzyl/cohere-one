import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Base';

const App = () => {

  return (
    <div className='dark'>
      <BrowserRouter>
        <div className="flex relative bg-main-dark-bg">
          <div className='bg-main-dark-bg  w-full min-h-screen flex-2 '>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
