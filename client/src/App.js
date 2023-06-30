import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContent from './AppContent';
import Articles from './Articles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posting" element={<AppContent />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
