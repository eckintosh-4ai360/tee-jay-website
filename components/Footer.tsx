'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <img src="/images/logo.png" alt="Tee Jay Multimedia" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />

              <div>
                <span className="font-black text-white text-base sm:text-lg block leading-tight">TEE JAY</span>
                <span className="text-sm sm:text-md text-gray-400">Multimedia</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              Your trusted partner for professional printing services and creative media production. <br /><span style={{color:'#EDB70A'}}>Serving You At Ease.</span>
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-yellow-400 rounded"></span>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/printing">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    Printing Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/media/photography">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    Photography
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/media/videography">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    Videography
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                  Graphic Design
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-yellow-400 rounded"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-yellow-400 rounded"></span>
              Get In Touch
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 group cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-all">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400 group-hover:text-black transition-all" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">(+233) 246-385-559</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 group cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-all">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400 group-hover:text-black transition-all" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium break-all">teejaymultimedia.gh@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 group cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-all">
                  <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400 group-hover:text-black transition-all" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">
                  Dankor, Mumford <br />
                  Gomoa West, Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              &copy; 2026 <span className="text-yellow-400 font-semibold">Tee Jay Multimedia</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-center text-center">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

