import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import EmailCapture from './components/Sections/EmailCapture/EmailCapture';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Articles from './pages/Blog/Blog';
import ArticleDetail from './pages/Blog/ArticleDetail';
import Contact from './pages/Contact/Contact';
import FullAccountManagement from './pages/Services/FullAccountManagement';
import AmazonAdvertising from './pages/Services/AmazonAdvertising';
import ProductOptimization from './pages/Services/ProductOptimization';
import LaunchingOnAmazon from './pages/Services/LaunchingOnAmazon';
import DesignServices from './pages/Services/DesignServices';
import ConsultingServices from './pages/Services/ConsultingServices';
import CatalogingServices from './pages/Services/CatalogingServices';
import TrainingServices from './pages/Services/TrainingServices';
import ServiceOfferDetail from './pages/Services/ServiceOfferDetail';
import DesignCategory from './pages/Services/DesignCategory';
import TroubleshootingCategory from './pages/Services/TroubleshootingCategory';
import OtherServicesCategory from './pages/Services/OtherServicesCategory';
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
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      document.body.classList.add('scrolling');
      document.documentElement.classList.add('scrolling');

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
        document.documentElement.classList.remove('scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/full-account-management" element={<FullAccountManagement />} />
              <Route path="/services/amazon-advertising" element={<AmazonAdvertising />} />
              <Route path="/services/product-optimization" element={<ProductOptimization />} />
              <Route path="/services/launching-on-amazon" element={<LaunchingOnAmazon />} />
              <Route path="/services/design-services" element={<DesignServices />} />
              <Route path="/services/consulting-services" element={<ConsultingServices />} />
              <Route path="/services/cataloging-services" element={<CatalogingServices />} />
              <Route path="/services/training-services" element={<TrainingServices />} />
              
              {/* Category pages */}
              <Route path="/services/design" element={<DesignCategory />} />
              <Route path="/services/troubleshooting" element={<TroubleshootingCategory />} />
              <Route path="/services/other" element={<OtherServicesCategory />} />
              
              {/* Additional services from dropdown */}
              <Route path="/services/amazon-seo" element={<FullAccountManagement />} />
              <Route path="/services/amazon-audit" element={<FullAccountManagement />} />
              <Route path="/services/sops" element={<FullAccountManagement />} />
              <Route path="/services/all-services" element={<FullAccountManagement />} />
              <Route path="/services/coaching" element={<FullAccountManagement />} />
              
              {/* Design services */}
              <Route path="/services/brand-guidelines" element={<DesignServices />} />
              <Route path="/services/brand-story" element={<DesignServices />} />
              <Route path="/services/brand-store" element={<DesignServices />} />
              <Route path="/services/listing-images" element={<DesignServices />} />
              <Route path="/services/enhanced-content" element={<DesignServices />} />
              <Route path="/services/main-image-ctr" element={<DesignServices />} />
              <Route path="/services/listing-optimization" element={<ProductOptimization />} />
              <Route path="/services/full-listing-optimization" element={<ProductOptimization />} />
              
              {/* Troubleshooting services */}
              <Route path="/services/listing-reinstatement" element={<ConsultingServices />} />
              <Route path="/services/account-suspension" element={<ConsultingServices />} />
              <Route path="/services/ppc-audit" element={<AmazonAdvertising />} />
              <Route path="/services/brand-name-change" element={<ConsultingServices />} />
              <Route path="/services/troubleshooting-hours" element={<ConsultingServices />} />
              <Route path="/services/upc-gs1-change" element={<ConsultingServices />} />
              
              {/* Other services */}
              <Route path="/services/amazon-dsp" element={<AmazonAdvertising />} />
              <Route path="/services/trademark-registration" element={<ConsultingServices />} />
              <Route path="/services/product-photography" element={<DesignServices />} />
              <Route path="/services/vendor-central" element={<FullAccountManagement />} />
              
              {/* Tools - redirect to external links or create placeholder pages */}
              <Route path="/tools/ppc-resources" element={<FullAccountManagement />} />
              <Route path="/tools/crisis-kit" element={<FullAccountManagement />} />
              <Route path="/tools/ppc-guide" element={<FullAccountManagement />} />
              <Route path="/tools/launch-deck" element={<FullAccountManagement />} />
              <Route path="/tools/dtc-growth" element={<FullAccountManagement />} />
              <Route path="/tools/seo-toolkit" element={<FullAccountManagement />} />
              <Route path="/tools/warehouse-codes" element={<FullAccountManagement />} />
              
              {/* Service detail pages */}
              <Route path="/services/design/:offerId" element={<ServiceOfferDetail />} />
              <Route path="/services/troubleshooting/:offerId" element={<ServiceOfferDetail />} />
              <Route path="/services/other/:offerId" element={<ServiceOfferDetail />} />
              <Route path="/services/:serviceType/:offerId" element={<ServiceOfferDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <EmailCapture />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
