'use client';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function CulturalHighlights() {
  const highlights = [
    {
      title: "Di Sản Văn Hóa",
      description: "Khám phá những di tích lịch sử được UNESCO công nhận",
      icon: "🏛️",
      features: ["Văn Miếu", "Hoàng Thành Thăng Long", "Phố Cổ Hà Nội"]
    },
    {
      title: "Ẩm Thực Truyền Thống",
      description: "Thưởng thức tinh hoa ẩm thực Bắc Bộ",
      icon: "🍜",
      features: ["Phở Hà Nội", "Bún Chả", "Chả Cá Lã Vọng"]
    },
    {
      title: "Nghệ Thuật Dân Gian",
      description: "Trải nghiệm các loại hình nghệ thuật truyền thống",
      icon: "🎭",
      features: ["Múa rối nước", "Ca trù", "Quan họ Bắc Ninh"]
    },
    {
      title: "Kiến Trúc Cổ Kính",
      description: "Chiêm ngưỡng vẻ đẹp kiến trúc Việt Nam xưa",
      icon: "🏯",
      features: ["Đình làng", "Chùa cổ", "Nhà ống phố cổ"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-pattern opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
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
        className="absolute top-20 left-10 text-5xl text-red-300 opacity-40"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 text-4xl text-yellow-400 opacity-30"
      >
        ❀
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            whileInView={{
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="text-4xl text-red-600">❀</div>
          </motion.div>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
            }}
          >
            Tinh Hoa Văn Hóa
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hà Nội - nơi hội tụ những giá trị văn hóa truyền thống quý báu của dân tộc Việt Nam
          </motion.p>
          <motion.div 
            className="section-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          ></motion.div>
        </MotionWrapper>

        {/* Highlights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div 
                className="traditional-card h-full p-8 text-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-red-100 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 relative z-10"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {highlight.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="font-display text-2xl font-bold text-red-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {highlight.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {highlight.description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  className="space-y-2 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                >
                  {highlight.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center justify-center text-sm text-gray-600"
                      variants={featureVariants}
                      custom={featureIndex}
                      whileHover={{ 
                        x: 5,
                        color: "#dc2626"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="text-yellow-600 mr-2"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: featureIndex * 0.3
                        }}
                      >
                        •
                      </motion.span>
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative border */}
                <motion.div 
                  className="mt-6 pt-6 border-t border-yellow-200 relative z-10"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <motion.div 
                    className="text-yellow-600 text-xl"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ❀
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <MotionWrapper direction="up" delay={0.8} className="text-center mt-16">
          <motion.div 
            className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-pattern opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            <div className="relative z-10">
              <motion.h3 
                className="font-display text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Trải Nghiệm Văn Hóa Hà Nội
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 text-yellow-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Đặt tour ngay hôm nay để khám phá những giá trị văn hóa độc đáo của thủ đô
              </motion.p>
              <motion.button 
                className="btn-traditional text-lg px-10 py-4 bg-yellow-600 hover:bg-yellow-700 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  Liên Hệ Tư Vấn
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  );
}