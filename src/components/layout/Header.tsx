import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e2db] dark:border-b-[#3d3322] px-10 py-3 bg-white dark:bg-[#1a150d] sticky top-0 z-50">
        <div className="flex items-center gap-4 text-[#181611] dark:text-white">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MDS - Mashreq For Digital Solutions" className="h-12" />
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200" to="/solutions">Services</Link>
            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200" to="/case-studies">Case Studies</Link>
            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200" to="/blog">Blog</Link>
            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200" to="/faq">FAQ</Link>
            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200" to="/about">About Us</Link>
            <Link className="text-sm font-medium leading-normal text-primary font-bold" to="/contact">Contact Us</Link>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <Link to="/pricing" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all">
            <span className="truncate">Get a Quote</span>
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined cursor-pointer text-2xl text-[#181611] dark:text-white">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1a150d] border-b border-[#e6e2db] dark:border-[#3d3322] sticky top-[60px] z-40 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/solutions"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/case-studies"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/faq"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="text-base font-medium leading-normal hover:text-primary transition-colors text-gray-700 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-gray-700"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#181611] text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="truncate">Get a Quote</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
