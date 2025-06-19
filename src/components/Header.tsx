'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/tours', label: 'Tour Du Lịch' },
    { href: '/about', label: 'Giới Thiệu' },
    { href: '/blog', label: 'Tin Tức' },
    { href: '/contact', label: 'Liên Hệ' },
  ];

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-2xl relative overflow-hidden">
      {/* Traditional pattern overlay */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-red-900 font-bold text-xl">河</span>
            </div>
            <div className="text-white">
              <h1 className="font-display text-2xl font-bold text-shadow">
                Du Lịch Hà Nội
              </h1>
              <p className="text-yellow-200 text-sm font-light">Thăng Long Cổ Đô</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 ml-6">
              <Link
                href="/login"
                className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Đăng Nhập
              </Link>
              <Link
                href="/booking"
                className="btn-traditional text-sm"
              >
                Đặt Tour
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Link
                  href="/login"
                  className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng Nhập
                </Link>
                <Link
                  href="/booking"
                  className="btn-traditional text-center mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đặt Tour
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}