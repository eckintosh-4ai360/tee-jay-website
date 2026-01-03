'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <img src="/images/logo.png" alt="Tee Jay Multimedia" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="block">
              <span className="block leading-tight text-sm sm:text-base md:text-xl lg:text-2xl" 
              style={{ color: '#E2B813', 
              fontFamily: 'Montserrat', 
              lineHeight: '1',
              fontWeight: '900' }}>TEE-JAY MULTIMEDIA</span>
              <span className='text-xs sm:text-sm md:text-base lg:text-xl hidden xs:block' style={{fontFamily:'times new roman', fontStyle:'italic'}}>Serving you at ease</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/">
            <span className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors cursor-pointer relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          <Link href="/printing">
            <span className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors cursor-pointer relative group">
              Printing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          {/* Media Production Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors flex items-center gap-2">
              Media Production
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <Link href="/media/photography">
                <span className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600 transition-colors cursor-pointer font-medium">
                  📸 Photography
                </span>
              </Link>
              <Link href="/media/videography">
                <span className="block px-5 py-3 text-gray-700 dark:text-gray-200 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600 transition-colors cursor-pointer border-t border-gray-100 dark:border-gray-700 font-medium">
                  🎥 Videography
                </span>
              </Link>
            </div>
          </div>

          <Link href="/about">
            <span className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors cursor-pointer relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          <Link href="/contact">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all cursor-pointer shadow-md hover:shadow-lg hover:scale-105 text-sm xl:text-base">
              Contact Us
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4">
            <Link href="/">
              <span
                className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors block cursor-pointer py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link href="/printing">
              <span
                className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors block cursor-pointer py-2"
                onClick={() => setIsOpen(false)}
              >
                Printing
              </span>
            </Link>
            
            <div>
              <button
                className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors flex items-center justify-between w-full py-2"
                onClick={() => setIsMediaOpen(!isMediaOpen)}
              >
                Media Production
                <ChevronDown size={16} className={`transition-transform ${isMediaOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMediaOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/media/photography">
                    <span
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 block cursor-pointer py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      📸 Photography
                    </span>
                  </Link>
                  <Link href="/media/videography">
                    <span
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 block cursor-pointer py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      🎥 Videography
                    </span>
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/about">
              <span
                className="text-gray-700 dark:text-gray-200 font-semibold hover:text-yellow-500 transition-colors block cursor-pointer py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </span>
            </Link>
            <Link href="/contact">
              <span
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all text-center block cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

