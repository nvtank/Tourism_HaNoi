'use client';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with traditional pattern */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-yellow-800"
      >
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/lang-chu-tich-ho-chi-minh-1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></motion.div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Traditional decoration */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl text-yellow-400 opacity-80"
            >
              ❀ ❀ ❀
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={titleVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow mb-6"
          >
            <motion.span 
              className="block"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(255,255,255,0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Hà Nội
            </motion.span>
            <motion.span 
              className="block text-gradient text-6xl md:text-8xl lg:text-9xl"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              Thăng Long
            </motion.span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-8"
          >
            <motion.p 
              className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed mb-4"
              whileInView={{ 
                opacity: [0.7, 1, 0.7],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              "Nghìn năm văn hiến, ngàn năm lịch sử"
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Khám phá vẻ đẹp cổ kính của kinh đô nghìn năm tuổi. Từ những ngôi đền cổ kính đến những con phố nhỏ đầy thơ mộng, 
              Hà Nội sẽ mang đến cho bạn những trải nghiệm văn hóa độc đáo và khó quên.
            </motion.p>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-traditional text-lg px-8 py-4 group relative overflow-hidden"
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Khám Phá Ngay
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Xem Video Giới Thiệu
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ scale: 0, borderRadius: "50%" }}
                whileHover={{ scale: 1, borderRadius: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>

          {/* Traditional decoration */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div 
              animate={{ 
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl text-yellow-400"
            >
              ❀ ❀ ❀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.svg 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
}