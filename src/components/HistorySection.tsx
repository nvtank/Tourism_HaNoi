'use client';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function HistorySection() {
  const timelineEvents = [
    {
      year: "1010",
      title: "Thành Lập Thăng Long",
      description: "Vua Lý Thái Tổ dời đô về Đại La, đổi tên thành Thăng Long, mở đầu cho lịch sử nghìn năm của Hà Nội.",
      icon: "🏰",
      color: "from-red-600 to-red-800"
    },
    {
      year: "1070",
      title: "Xây Dựng Văn Miếu",
      description: "Văn Miếu được xây dựng, trở thành trường đại học đầu tiên của Việt Nam, biểu tượng của truyền thống hiếu học.",
      icon: "📚",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      year: "1428",
      title: "Thời Kỳ Lê Sơ",
      description: "Vua Lê Lợi lập ra triều Lê, Thăng Long tiếp tục là trung tâm chính trị, văn hóa của đất nước.",
      icon: "👑",
      color: "from-red-700 to-red-900"
    },
    {
      year: "1831",
      title: "Đổi Tên Hà Nội",
      description: "Vua Minh Mạng đổi tên Thăng Long thành Hà Nội, tên gọi được sử dụng cho đến ngày nay.",
      icon: "🏛️",
      color: "from-amber-600 to-amber-800"
    },
    {
      year: "1945",
      title: "Thủ Đô Việt Nam",
      description: "Hà Nội chính thức trở thành thủ đô của nước Việt Nam Dân chủ Cộng hòa do Chủ tịch Hồ Chí Minh lãnh đạo.",
      icon: "🇻🇳",
      color: "from-red-600 to-yellow-600"
    },
    {
      year: "2010",
      title: "Nghìn Năm Thăng Long",
      description: "Kỷ niệm 1000 năm Thăng Long - Hà Nội, khẳng định vị thế của thủ đô nghìn năm văn hiến.",
      icon: "🎉",
      color: "from-yellow-500 to-red-600"
    }
  ];

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

  const timelineVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-white to-red-50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-8xl text-red-200 opacity-20"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -15, 15, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-16 text-6xl text-yellow-300 opacity-25"
      >
        ❀
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="text-center mb-20">
          <motion.div 
            className="flex justify-center mb-8"
            whileInView={{
              rotate: [0, 360],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <div className="text-5xl text-red-600">❀</div>
          </motion.div>
          
          <motion.h2 
            className="font-display text-5xl md:text-7xl font-bold text-red-900 mb-8"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(220, 38, 38, 0.4)"
            }}
          >
            Nghìn Năm Lịch Sử
          </motion.h2>
          
          <motion.div
            className="text-3xl md:text-4xl font-display text-yellow-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Thăng Long - Hà Nội
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Từ thành Đại La cổ kính đến thủ đô Hà Nội hiện đại, hành trình nghìn năm văn hiến 
            đã tạo nên một Hà Nội đầy bản sắc và giàu truyền thống
          </motion.p>
          
          <motion.div 
            className="section-divider mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          ></motion.div>
        </MotionWrapper>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-yellow-600 to-red-600 h-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <motion.div 
                  className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="traditional-card p-8 relative overflow-hidden group"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0`}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div 
                      className={`text-4xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-4`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {event.year}
                    </motion.div>
                    
                    <motion.h3 
                      className="font-display text-2xl font-bold text-red-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {event.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {event.description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Timeline dot with icon */}
                <motion.div 
                  className="w-2/12 flex justify-center relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    variants={iconVariants}
                    whileHover="hover"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <span className="text-2xl">{event.icon}</span>
                  </motion.div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <MotionWrapper direction="up" delay={1} className="text-center mt-20">
          <motion.div 
            className="bg-gradient-to-r from-red-900 via-red-800 to-amber-800 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
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
            
            <div className="relative z-10">
              <motion.h3 
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Khám Phá Lịch Sử Hà Nội
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-yellow-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Tham gia tour lịch sử để trải nghiệm trực tiếp những câu chuyện hấp dẫn về quá khứ huy hoàng của thủ đô
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
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
                    Tour Lịch Sử Hà Nội
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 text-lg relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Tìm Hiểu Thêm
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-yellow-400"
                    initial={{ scale: 0, borderRadius: "50%" }}
                    whileHover={{ scale: 1, borderRadius: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  );
}