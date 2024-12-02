import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home.jsx';
import TipstersPage from './pages/Tipsters/Tipsters.jsx';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/dashboard" element={<HomePage />} />
      <Route path="/tipsters" element={<TipstersPage />} /> */}
    </Routes>
  </Router>
  )
}

export default App
