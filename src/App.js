import React from 'react';
import {
  BrowserRouter as Router,
  Navigate, Route, Routes,
} from 'react-router-dom';
import './index.css';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<CountryDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
