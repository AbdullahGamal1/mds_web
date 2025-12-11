import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import TestimonialsPage from './pages/Testimonials';
import SolutionsWizard from './pages/SolutionsWizard';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Support from './pages/Support';
import Ecosystem from './pages/Ecosystem';
import Module from './pages/Module';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px]">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/case-studies" element={<CaseStudy />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/solutions-wizard" element={<SolutionsWizard />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/solutions" element={<Services />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/module" element={<Module />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/about" element={<div className="p-10 text-center">About Us Page (Coming Soon)</div>} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
