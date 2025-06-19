'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  // Enhanced menu item variants với nhiều hiệu ứng
  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.9
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.08,
      y: -3,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Variants cho background hover effect
  const menuBackgroundVariants = {
    initial: {
      scaleX: 0,
      opacity: 0
    },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Variants cho underline effect
  const underlineVariants = {
    initial: {
      width: 0,
      opacity: 0
    },
    hover: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Variants cho glow effect
  const glowVariants = {
    initial: {
      boxShadow: "0 0 0px rgba(254, 240, 138, 0)",
      scale: 1
    },
    hover: {
      boxShadow: "0 0 20px rgba(254, 240, 138, 0.6), 0 0 40px rgba(254, 240, 138, 0.3)",
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Variants cho text effect
  const textVariants = {
    initial: {
      color: "#ffffff"
    },
    hover: {
      color: "#fde047",
      textShadow: "0 0 10px rgba(253, 224, 71, 0.5)",
      transition: {
        duration: 0.3,
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
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Variants cho nút đăng nhập
  const loginButtonVariants = {
    rest: {
      scale: 1,
      y: 0,
      backgroundColor: "transparent",
      color: "#ffffff"
    },
    hover: {
      scale: 1.05,
      y: -2,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#fde047",
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

  // Variants cho nút đặt tour
  const bookingButtonVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)"
    },
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 8px 25px rgba(212, 175, 55, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const shimmerVariants = {
    rest: { x: "-100%" },
    hover: {
      x: "100%",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
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
          <nav className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                className="relative"
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {/* Background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-lg"
                  variants={menuBackgroundVariants}
                  initial="initial"
                  animate={hoveredItem === item.href ? "hover" : "initial"}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  variants={glowVariants}
                  initial="initial"
                  animate={hoveredItem === item.href ? "hover" : "initial"}
                />

                {/* Link content */}
                <motion.div
                  className="relative z-10"
                  variants={textVariants}
                  initial="initial"
                  animate={hoveredItem === item.href ? "hover" : "initial"}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 rounded-lg font-medium transition-all duration-300 relative"
                  >
                    {/* Text with enhanced effects */}
                    <motion.span
                      className="relative z-20"
                      whileHover={{
                        scale: 1.05,
                        letterSpacing: "0.5px"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"
                      variants={underlineVariants}
                      initial="initial"
                      animate={hoveredItem === item.href ? "hover" : "initial"}
                    />

                    {/* Side borders */}
                    <motion.div
                      className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                      initial={{ height: 0, opacity: 0 }}
                      animate={hoveredItem === item.href ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.div
                      className="absolute right-0 top-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                      initial={{ height: 0, opacity: 0 }}
                      animate={hoveredItem === item.href ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />

                    {/* Floating particles effect */}
                    {hoveredItem === item.href && (
                      <motion.div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                            initial={{ 
                              x: Math.random() * 100 + "%", 
                              y: "100%", 
                              opacity: 0,
                              scale: 0
                            }}
                            animate={{ 
                              y: "-20px", 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              delay: i * 0.2,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
            
            <motion.div 
              className="flex items-center space-x-3 ml-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* Nút Đăng Nhập với hiệu ứng nâng cao */}
              <motion.div
                variants={loginButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden rounded-lg"
              >
                <Link
                  href="/login"
                  className="block px-4 py-2 rounded-lg font-medium transition-all duration-300 relative z-10"
                >
                  Đăng Nhập
                </Link>
                {/* Hiệu ứng background hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Nút Đặt Tour với hiệu ứng nâng cao */}
              <motion.div
                variants={bookingButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden"
              >
                <Link
                  href="/booking"
                  className="btn-traditional text-sm relative z-20 block"
                >
                  <motion.span
                    className="relative z-30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Đặt Tour
                  </motion.span>
                  
                  {/* Hiệu ứng shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
                    variants={shimmerVariants}
                    initial="rest"
                    whileHover="hover"
                  />
                  
                  {/* Background gradient hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 z-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-full z-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ duration: 0.6 }}
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
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg"
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300 block relative overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                      
                      {/* Mobile hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="flex flex-col space-y-2 pt-4 border-t border-white/20"
                  variants={mobileItemVariants}
                >
                  {/* Mobile Login Button */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/login"
                      className="text-white hover:text-yellow-300 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Đăng Nhập
                    </Link>
                  </motion.div>
                  
                  {/* Mobile Booking Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mx-4 relative overflow-hidden rounded-full"
                  >
                    <Link
                      href="/booking"
                      className="btn-traditional text-center block relative z-10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-20"
                      >
                        Đặt Tour
                      </motion.span>
                      
                      {/* Mobile shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
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