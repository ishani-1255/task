import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Calendar from './components/Calender';
import Leisure from './components/Leisure';

function App() {
  return (
    <Router>
      <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/events" element={<Calendar />} />
        <Route path="/leisure" element={<Leisure />} />
      </Routes>
    </Header>
    </Router>
  );
}

export default App;
