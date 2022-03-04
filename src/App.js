import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/article/:name' element={<ArticlePage />} />
              <Route path='/articles-list' element={<ArticleListPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
