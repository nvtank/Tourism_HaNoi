'use client';
import { motion } from 'framer-motion';
import MotionWrapper from './MotionWrapper';

export default function FeaturedTours() {
  const tours = [
    {
      id: 1,
      title: "Phố Cổ Hà Nội",
      description: "Khám phá 36 phố phường cổ kính với lịch sử hàng nghìn năm",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "500.000 VNĐ",
      duration: "1 ngày",
      highlights: ["Đền Ngọc Sơn", "Hồ Hoàn Kiếm", "Chợ Đồng Xuân"]
    },
    {
      id: 2,
      title: "Văn Miếu - Quốc Tử Giám",
      description: "Thăm trường đại học đầu tiên của Việt Nam",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "300.000 VNĐ",
      duration: "Nửa ngày",
      highlights: ["Văn Miếu", "Quốc Tử Giám", "Bia tiến sĩ"]
    },
    {
      id: 3,
      title: "Lăng Chủ Tịch Hồ Chí Minh",
      description: "Tham quan nơi an nghỉ của Bác Hồ kính yêu",
      image: "https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "200.000 VNĐ",
      duration: "Nửa ngày",
      highlights: ["Lăng Bác", "Nhà sàn", "Bảo tàng Hồ Chí Minh"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
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
    <section className="py-20 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 text-6xl text-yellow-200 opacity-30"
      >
        ❀
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            whileInView={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="text-4xl text-yellow-600">❀</div>
          </motion.div>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6"
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #7f1d1d, #dc2626, #7f1d1d)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Tour Nổi Bật
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Những hành trình khám phá tinh hoa văn hóa và lịch sử của thủ đô nghìn năm tuổi
          </motion.p>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
          ></motion.div>
        </MotionWrapper>

        {/* Tours Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id} 
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="traditional-card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <motion.img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.span 
                    className="bg-yellow-600 px-3 py-1 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tour.duration}
                  </motion.span>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.h3 
                  className="font-display text-2xl font-bold text-red-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {tour.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {tour.description}
                </motion.p>

                {/* Highlights */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  <h4 className="font-semibold text-red-800 mb-2">Điểm nổi bật:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.highlights.map((highlight, hIndex) => (
                      <motion.li 
                        key={hIndex} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 + hIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-yellow-600 mr-2"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: hIndex * 0.5
                          }}
                        >
                          •
                        </motion.span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Price and CTA */}
                <motion.div 
                  className="flex items-center justify-between pt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                >
                  <div>
                    <motion.span 
                      className="text-2xl font-bold text-red-900"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tour.price}
                    </motion.span>
                    <span className="text-gray-600 text-sm">/người</span>
                  </div>
                  <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-2 rounded-full font-semibold relative overflow-hidden"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Đặt Tour
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-800"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <MotionWrapper direction="up" delay={0.5} className="text-center mt-12">
          <motion.button 
            className="btn-traditional text-lg px-10 py-4 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Xem Tất Cả Tour
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </MotionWrapper>
      </div>
    </section>
  );
}