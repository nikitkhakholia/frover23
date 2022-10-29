import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Wrapper from './Wrapper';
import { AuthProvider } from './Contexts/AuthContext';
import RoverControlls from './Pages/RoverControlls';
import Dashboard from './Pages/Dashboard';
import Analysis from './Pages/Analysis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-black min-h-screen'>
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
         <Routes>
          
            <Route path='/control' element={<RoverControlls />} />
            <Route path='/analysis' element={<Analysis />} />
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
