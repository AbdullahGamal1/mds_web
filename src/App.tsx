import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import CaseStudyDetail from './pages/CaseStudyDetail';
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

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/layouts/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import BlogManager from './admin/pages/BlogManager';
import ContactSubmissions from './admin/pages/ContactSubmissions';
import ProtectedRoute from './admin/components/ProtectedRoute';
import TestimonialsManager from './admin/pages/TestimonialsManager';
import FAQManager from './admin/pages/FAQManager';
import CaseStudyManager from './admin/pages/CaseStudyManager';
import NewsletterManager from './admin/pages/NewsletterManager';
import ServicesManager from './admin/pages/ServicesManager';

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
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/case-studies" element={<CaseStudy />} />
                  <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
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

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="blog" element={<BlogManager />} />
                    <Route path="contact" element={<ContactSubmissions />} />
                    <Route path="testimonials" element={<TestimonialsManager />} />
                    <Route path="faq" element={<FAQManager />} />
                    <Route path="case-studies" element={<CaseStudyManager />} />
                    <Route path="newsletter" element={<NewsletterManager />} />
                    <Route path="services" element={<ServicesManager />} />
                  </Route>

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
