import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/Home/Home';

export const App = () => {
  return (
    <Router>
      <div data-testid="app-root">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<HomePage />} />
          <Route path="/tipsters" element={<TipstersPage />} /> */}
        </Routes>
      </div>
    </Router>
  )
}
