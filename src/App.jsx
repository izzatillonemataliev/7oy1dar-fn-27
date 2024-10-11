import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonPagination from './pages/ButtonPagination';
import ResponsivePagination from 'react-responsive-pagination'; // `ResponsivePagination` komponentini import qilish

function App() {
  return (
    <Router>
      <nav>
        <Link to="/button-pagination">Button Pagination</Link>
      </nav>
      <Routes>
        <Route path="/button-pagination" element={<ButtonPagination />} />
      </Routes>
    </Router>
  );
}

export default App;
