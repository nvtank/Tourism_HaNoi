'use client';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Thị Mai",
      location: "TP. Hồ Chí Minh",
      content: "Chuyến đi Hà Nội thật tuyệt vời! Tôi đã được khám phá những nét đẹp văn hóa truyền thống và thưởng thức những món ăn ngon tuyệt. Hướng dẫn viên rất nhiệt tình và am hiểu.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Trần Văn Hùng",
      location: "Đà Nẵng",
      content: "Lần đầu tiên đến Hà Nội, tôi đã bị ấn tượng bởi vẻ đẹp cổ kính của phố cổ. Mỗi con phố đều có câu chuyện riêng. Dịch vụ tour rất chuyên nghiệp.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lê Thị Hương",
      location: "Cần Thơ",
      content: "Văn Miếu và Quốc Tử Giám thật trang nghiêm và linh thiêng. Tôi cảm nhận được sự tôn kính đối với tri thức của tổ tiên. Một trải nghiệm không thể quên!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const quoteVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    })
  };

  const avatarVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-6xl text-yellow-200 opacity-20"
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
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-16 text-5xl text-red-200 opacity-25"
      >
        ❀
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            whileInView={{
              rotate: [0, 360],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="text-4xl text-yellow-600">❀</div>
          </motion.div>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 25px rgba(220, 38, 38, 0.4)"
            }}
          >
            Cảm Nhận Khách Hàng
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Những chia sẻ chân thành từ du khách đã trải nghiệm tour du lịch Hà Nội cùng chúng tôi
          </motion.p>
          <motion.div 
            className="section-divider"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          ></motion.div>
        </MotionWrapper>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="traditional-card p-8 relative group"
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-red-50 opacity-0 rounded-2xl"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Quote decoration */}
              <motion.div 
                className="absolute top-4 left-4 text-4xl text-yellow-600 opacity-50"
                variants={quoteVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
              >
                "
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <motion.div 
                  className="flex justify-center mb-4"
                  initial="hidden"
                  whileInView="visible"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-500 text-xl"
                      variants={starVariants}
                      custom={i}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                {/* Testimonial text */}
                <motion.p 
                  className="text-gray-700 leading-relaxed mb-6 italic relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {testimonial.content}
                </motion.p>

                {/* Author info */}
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-yellow-400"
                    variants={avatarVariants}
                    whileHover="hover"
                  />
                  <div className="text-center">
                    <motion.h4 
                      className="font-semibold text-red-900"
                      whileHover={{ scale: 1.05, color: "#dc2626" }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    >
                      {testimonial.location}
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decoration */}
              <motion.div 
                className="absolute bottom-4 right-4 text-4xl text-yellow-600 opacity-50 rotate-180"
                variants={quoteVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                "
              </motion.div>

              {/* Floating particles on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                whileHover={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <MotionWrapper direction="up" delay={0.8} className="text-center mt-16">
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-display text-2xl font-bold text-red-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 15px rgba(220, 38, 38, 0.3)"
              }}
            >
              Bạn cũng muốn có trải nghiệm tương tự?
            </motion.h3>
            <motion.button 
              className="btn-traditional text-lg px-10 py-4 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Đặt Tour Ngay
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                whileHover={{
                  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  );
}