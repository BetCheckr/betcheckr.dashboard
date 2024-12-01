import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BetPage from './pages/BetPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bet/:id" element={<BetPage />} />
    </Routes>
  </Router>
  )
}

export default App
