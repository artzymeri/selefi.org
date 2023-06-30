import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContent from './AppContent';
import Articles from './Articles';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posting" element={<AppContent />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
