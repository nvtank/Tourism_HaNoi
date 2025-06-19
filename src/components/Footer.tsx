'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Về Chúng Tôi",
      links: [
        { href: "/about", label: "Giới Thiệu" },
        { href: "/team", label: "Đội Ngũ" },
        { href: "/careers", label: "Tuyển Dụng" },
        { href: "/news", label: "Tin Tức" }
      ]
    },
    {
      title: "Dịch Vụ",
      links: [
        { href: "/tours", label: "Tour Du Lịch" },
        { href: "/booking", label: "Đặt Tour" },
        { href: "/guide", label: "Hướng Dẫn Viên" },
        { href: "/transport", label: "Vận Chuyển" }
      ]
    },
    {
      title: "Hỗ Trợ",
      links: [
        { href: "/contact", label: "Liên Hệ" },
        { href: "/faq", label: "Câu Hỏi Thường Gặp" },
        { href: "/terms", label: "Điều Khoản" },
        { href: "/privacy", label: "Bảo Mật" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      backgroundColor: "#eab308",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#fde047",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <motion.div 
        className="absolute inset-0 bg-pattern opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>

      {/* Floating decorations */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-5xl text-yellow-300 opacity-30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [0, -8, 8, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-16 text-4xl text-yellow-400 opacity-25"
      >
        ❀
      </motion.div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-red-900 font-bold text-xl">河</span>
                </motion.div>
                <div>
                  <motion.h3 
                    className="font-display text-2xl font-bold"
                    whileHover={{
                      textShadow: "0 0 15px rgba(255,255,255,0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Du Lịch Hà Nội
                  </motion.h3>
                  <motion.p 
                    className="text-yellow-200 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Thăng Long Cổ Đô
                  </motion.p>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Khám phá vẻ đẹp cổ kính của thủ đô nghìn năm tuổi cùng những trải nghiệm văn hóa độc đáo và khó quên.
              </motion.p>
              
              {/* Social media */}
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-lg">{icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex}
                variants={itemVariants}
              >
                <motion.h4 
                  className="font-display text-xl font-bold mb-6 text-yellow-300"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(254, 240, 138, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        <Link
                          href={link.href}
                          className="text-gray-300 transition-colors duration-300 flex items-center group"
                        >
                          <motion.span 
                            className="text-yellow-600 mr-2 group-hover:mr-3 transition-all duration-300"
                            whileHover={{ 
                              scale: 1.2,
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            •
                          </motion.span>
                          {link.label}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact info */}
          <motion.div 
            className="border-t border-white/20 mt-12 pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "📍", title: "Địa Chỉ", content: "123 Phố Cổ, Hoàn Kiếm, Hà Nội" },
                { icon: "📞", title: "Điện Thoại", content: "+84 24 3825 xxxx" },
                { icon: "✉️", title: "Email", content: "info@dulichhanoi.vn" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <motion.span 
                    className="text-yellow-400 text-2xl mr-3"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {contact.icon}
                  </motion.span>
                  <div>
                    <motion.h5 
                      className="font-semibold text-yellow-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.title}
                    </motion.h5>
                    <p className="text-gray-300">{contact.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <motion.p 
                className="text-gray-300 text-sm mb-4 md:mb-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                © {currentYear} Du Lịch Hà Nội. Tất cả quyền được bảo lưu.
              </motion.p>
              <motion.div 
                className="flex items-center space-x-6 text-sm text-gray-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                {[
                  { href: "/terms", label: "Điều Khoản Sử Dụng" },
                  { href: "/privacy", label: "Chính Sách Bảo Mật" },
                  { href: "/sitemap", label: "Sơ Đồ Trang Web" }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href} 
                      className="hover:text-yellow-300 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}