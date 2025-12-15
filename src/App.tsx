import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProtectedRoute from './admin/components/ProtectedRoute';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const CaseStudy = React.lazy(() => import('./pages/CaseStudy'));
const CaseStudyDetail = React.lazy(() => import('./pages/CaseStudyDetail'));
const TestimonialsPage = React.lazy(() => import('./pages/Testimonials'));
const SolutionsWizard = React.lazy(() => import('./pages/SolutionsWizard'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Services = React.lazy(() => import('./pages/Services'));
const Support = React.lazy(() => import('./pages/Support'));
const Ecosystem = React.lazy(() => import('./pages/Ecosystem'));
const Module = React.lazy(() => import('./pages/Module'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Blog = React.lazy(() => import('./pages/Blog'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

// Admin imports (Lazy loaded)
const AdminLogin = React.lazy(() => import('./admin/pages/AdminLogin'));
const AdminLayout = React.lazy(() => import('./admin/layouts/AdminLayout'));
const Dashboard = React.lazy(() => import('./admin/pages/Dashboard'));
const BlogManager = React.lazy(() => import('./admin/pages/BlogManager'));
const ContactSubmissions = React.lazy(() => import('./admin/pages/ContactSubmissions'));
const TestimonialsManager = React.lazy(() => import('./admin/pages/TestimonialsManager'));
const FAQManager = React.lazy(() => import('./admin/pages/FAQManager'));
const CaseStudyManager = React.lazy(() => import('./admin/pages/CaseStudyManager'));
const NewsletterManager = React.lazy(() => import('./admin/pages/NewsletterManager'));
const ServicesManager = React.lazy(() => import('./admin/pages/ServicesManager'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px]">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
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
