import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuidePage() {
  const guides = [
    {
      name: "Lê Văn Đức",
      specialties: ["Lịch sử Hà Nội", "Văn hóa truyền thống"],
      experience: "10 năm",
      languages: ["Tiếng Việt", "English", "Français"],
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      tours: 500,
      description: "Thạc sĩ Lịch sử Việt Nam, chuyên sâu về văn hóa và lịch sử Hà Nội. Đam mê chia sẻ kiến thức về quá khứ huy hoàng của thủ đô."
    },
    {
      name: "Nguyễn Thị Mai",
      specialties: ["Ẩm thực Hà Nội", "Phố cổ"],
      experience: "8 năm",
      languages: ["Tiếng Việt", "English", "日本語"],
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      tours: 420,
      description: "Chuyên gia ẩm thực với kiến thức sâu rộng về các món ăn truyền thống Hà Nội. Luôn mang đến những trải nghiệm ẩm thực đáng nhớ."
    },
    {
      name: "Trần Văn Hùng",
      specialties: ["Kiến trúc cổ", "Tôn giáo"],
      experience: "12 năm",
      languages: ["Tiếng Việt", "English", "中文"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      tours: 650,
      description: "Chuyên gia về kiến trúc cổ và văn hóa tôn giáo Việt Nam. Có khả năng giải thích sâu sắc về ý nghĩa các công trình kiến trúc."
    },
    {
      name: "Phạm Thị Lan",
      specialties: ["Nghệ thuật dân gian", "Làng nghề"],
      experience: "6 năm",
      languages: ["Tiếng Việt", "English", "한국어"],
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      tours: 320,
      description: "Chuyên về nghệ thuật dân gian và các làng nghề truyền thống. Có mối quan hệ tốt với các nghệ nhân địa phương."
    },
    {
      name: "Hoàng Văn Nam",
      specialties: ["Lịch sử hiện đại", "Cách mạng"],
      experience: "9 năm",
      languages: ["Tiếng Việt", "English", "Русский"],
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      tours: 480,
      description: "Chuyên gia về lịch sử cách mạng và Hà Nội hiện đại. Có khả năng kể chuyện sinh động về các sự kiện lịch sử."
    },
    {
      name: "Vũ Thị Hoa",
      specialties: ["Văn học Việt Nam", "Thơ ca"],
      experience: "7 năm",
      languages: ["Tiếng Việt", "English", "Deutsch"],
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      tours: 380,
      description: "Thạc sĩ Văn học Việt Nam, chuyên về thơ ca và văn học cổ điển. Mang đến góc nhìn văn học độc đáo về Hà Nội."
    }
  ];

  const services = [
    {
      title: "Hướng Dẫn Chuyên Nghiệp",
      description: "Đội ngũ hướng dẫn viên được đào tạo bài bản với kiến thức chuyên sâu",
      icon: "👨‍🏫",
      features: ["Kiến thức chuyên môn cao", "Kỹ năng thuyết trình tốt", "Nhiệt tình và tận tâm"]
    },
    {
      title: "Đa Ngôn Ngữ",
      description: "Hỗ trợ nhiều ngôn ngữ khác nhau để phục vụ du khách quốc tế",
      icon: "🌍",
      features: ["Tiếng Anh", "Tiếng Pháp", "Tiếng Nhật", "Tiếng Trung", "Tiếng Hàn"]
    },
    {
      title: "Tùy Chỉnh Tour",
      description: "Thiết kế tour theo yêu cầu riêng của từng nhóm khách",
      icon: "🎯",
      features: ["Lịch trình linh hoạt", "Chủ đề đa dạng", "Thời gian tùy chọn"]
    },
    {
      title: "Hỗ Trợ 24/7",
      description: "Luôn sẵn sàng hỗ trợ khách hàng trong suốt chuyến đi",
      icon: "🕐",
      features: ["Hotline 24/7", "Hỗ trợ khẩn cấp", "Tư vấn miễn phí"]
    }
  ];

  const certifications = [
    "Chứng chỉ Hướng dẫn viên Du lịch Quốc gia",
    "Chứng chỉ Ngoại ngữ quốc tế",
    "Chứng chỉ Sơ cấp cứu",
    "Chứng chỉ An toàn Du lịch"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-amber-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="text-4xl text-yellow-400">❀</div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white text-shadow mb-6">
            Hướng Dẫn Viên
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Đội ngũ hướng dẫn viên chuyên nghiệp với kiến thức sâu rộng về văn hóa Hà Nội
          </p>
        </div>
      </section>

      {/* Guide Services */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Dịch Vụ Hướng Dẫn
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Những dịch vụ chuyên nghiệp mà đội ngũ hướng dẫn viên của chúng tôi cung cấp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <span className="text-yellow-600 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guides */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Đội Ngũ Hướng Dẫn Viên
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Gặp gỡ những hướng dẫn viên tài năng và giàu kinh nghiệm của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="traditional-card hover-lift p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-yellow-400"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-red-900 mb-2">
                  {guide.name}
                </h3>
                
                <div className="flex justify-center items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(guide.rating) ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({guide.rating})</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-semibold text-red-800">Kinh nghiệm:</span>
                    <p className="text-gray-700">{guide.experience}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-red-800">Tours:</span>
                    <p className="text-gray-700">{guide.tours}+</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="font-semibold text-red-800 block mb-2">Chuyên môn:</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {guide.specialties.map((specialty, sIndex) => (
                      <span key={sIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="font-semibold text-red-800 block mb-2">Ngôn ngữ:</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {guide.languages.map((lang, lIndex) => (
                      <span key={lIndex} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {guide.description}
                </p>
                
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 text-sm">
                  Chọn Hướng Dẫn Viên
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Chứng Chỉ & Đào Tạo
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tất cả hướng dẫn viên đều được đào tạo bài bản và có đầy đủ chứng chỉ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-3">
                  {cert}
                </h3>
                <div className="text-green-600 font-semibold">✓ Đã Xác Thực</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Guide */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">🎯</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Đặt Hướng Dẫn Viên Riêng
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Chọn hướng dẫn viên phù hợp với nhu cầu và sở thích của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Đặt Hướng Dẫn Viên
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Tư Vấn Miễn Phí
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}