'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/tours', label: 'Tour Du Lịch' },
    { href: '/about', label: 'Giới Thiệu' },
    { href: '/blog', label: 'Tin Tức' },
    { href: '/contact', label: 'Liên Hệ' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-2xl relative overflow-hidden sticky top-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Traditional pattern overlay */}
      <motion.div 
        className="absolute inset-0 bg-pattern opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg"
              variants={logoVariants}
              whileHover="hover"
            >
              <motion.span 
                className="text-red-900 font-bold text-xl"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.6 }}
              >
                河
              </motion.span>
            </motion.div>
            <motion.div 
              className="text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h1 
                className="font-display text-2xl font-bold text-shadow"
                whileHover={{
                  textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                Du Lịch Hà Nội
              </motion.h1>
              <motion.p 
                className="text-yellow-200 text-sm font-light"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Thăng Long Cổ Đô
              </motion.p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 relative group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              className="flex items-center space-x-3 ml-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div whileHover="hover" variants={buttonVariants}>
                <Link
                  href="/login"
                  className="text-white hover:text-yellow-300 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Đăng Nhập
                </Link>
              </motion.div>
              <motion.div 
                whileHover="hover" 
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/booking"
                  className="btn-traditional text-sm relative overflow-hidden"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Đặt Tour
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t border-white/20"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="flex flex-col space-y-2 pt-4 border-t border-white/20"
                  variants={mobileItemVariants}
                >
                  <Link
                    href="/login"
                    className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng Nhập
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/booking"
                      className="btn-traditional text-center mx-4 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Đặt Tour
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}