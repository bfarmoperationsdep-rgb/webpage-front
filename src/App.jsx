import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import FullAccountManagement from './pages/Services/FullAccountManagement';
import AmazonAdvertising from './pages/Services/AmazonAdvertising';
import ProductOptimization from './pages/Services/ProductOptimization';
import LaunchingOnAmazon from './pages/Services/LaunchingOnAmazon';
import './styles/main.scss';

// Компонент для автоматичного скролу вгору при зміні роуту
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Скрол вгору при зміні сторінки
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/full-account-management" element={<FullAccountManagement />} />
              <Route path="/services/amazon-advertising" element={<AmazonAdvertising />} />
              <Route path="/services/product-optimization" element={<ProductOptimization />} />
              <Route path="/services/launching-on-amazon" element={<LaunchingOnAmazon />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
