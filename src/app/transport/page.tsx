import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TransportPage() {
  const vehicles = [
    {
      name: "Xe Máy Honda",
      capacity: "1-2 người",
      price: "200.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Tiết kiệm nhiên liệu", "Dễ di chuyển trong phố cổ", "Có mũ bảo hiểm", "Bảo hiểm đầy đủ"],
      description: "Phương tiện lý tưởng để khám phá các con phố nhỏ trong khu phố cổ Hà Nội."
    },
    {
      name: "Xe Ô Tô 4 Chỗ",
      capacity: "1-4 người",
      price: "800.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Điều hòa mát lạnh", "Tài xế kinh nghiệm", "Nhiên liệu bao gồm", "Bảo hiểm toàn diện"],
      description: "Xe ô tô hiện đại, thoải mái cho gia đình nhỏ hoặc nhóm bạn."
    },
    {
      name: "Xe Ô Tô 7 Chỗ",
      capacity: "1-7 người",
      price: "1.200.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Không gian rộng rãi", "Hành lý lớn", "Wifi miễn phí", "Nước uống miễn phí"],
      description: "Lựa chọn hoàn hảo cho nhóm lớn hoặc gia đình đông thành viên."
    },
    {
      name: "Xe Bus 16 Chỗ",
      capacity: "8-16 người",
      price: "1.800.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Ghế ngồi thoải mái", "Hệ thống âm thanh", "Điều hòa mạnh", "Tài xế chuyên nghiệp"],
      description: "Phù hợp cho các đoàn du lịch, công ty hoặc nhóm bạn lớn."
    },
    {
      name: "Xe Bus 35 Chỗ",
      capacity: "20-35 người",
      price: "2.500.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Ghế ngồi cao cấp", "Karaoke", "Tivi LCD", "Khoang hành lý lớn"],
      description: "Dành cho các đoàn du lịch lớn, hội nghị, sự kiện công ty."
    },
    {
      name: "Xe Bus 45 Chỗ",
      capacity: "30-45 người",
      price: "3.200.000 VNĐ/ngày",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Ghế massage", "Wifi cao tốc", "Minibar", "Toilet riêng"],
      description: "Xe bus cao cấp nhất với đầy đủ tiện nghi cho chuyến đi dài ngày."
    }
  ];

  const services = [
    {
      title: "Đưa Đón Sân Bay",
      description: "Dịch vụ đưa đón từ sân bay Nội Bài về trung tâm Hà Nội",
      icon: "✈️",
      price: "Từ 300.000 VNĐ",
      features: ["Theo dõi chuyến bay", "Đón tại cửa ra", "Hỗ trợ hành lý", "Thanh toán linh hoạt"]
    },
    {
      title: "Tour Trong Ngày",
      description: "Thuê xe với tài xế cho các tour tham quan trong ngày",
      icon: "🗺️",
      price: "Từ 800.000 VNĐ",
      features: ["Tài xế kinh nghiệm", "Lịch trình linh hoạt", "Nhiên liệu bao gồm", "Hướng dẫn cơ bản"]
    },
    {
      title: "Thuê Xe Dài Hạn",
      description: "Thuê xe theo tuần hoặc tháng với giá ưu đãi",
      icon: "📅",
      price: "Từ 15.000.000 VNĐ/tháng",
      features: ["Giá ưu đãi", "Bảo dưỡng định kỳ", "Thay thế khi hỏng", "Hỗ trợ 24/7"]
    },
    {
      title: "Xe Tự Lái",
      description: "Thuê xe tự lái cho những ai muốn tự do khám phá",
      icon: "🚗",
      price: "Từ 600.000 VNĐ/ngày",
      features: ["Xe mới đời", "GPS tích hợp", "Bảo hiểm đầy đủ", "Hỗ trợ khẩn cấp"]
    }
  ];

  const safetyFeatures = [
    {
      title: "Bảo Hiểm Toàn Diện",
      description: "Tất cả xe đều có bảo hiểm trách nhiệm dân sự và bảo hiểm vật chất",
      icon: "🛡️"
    },
    {
      title: "Kiểm Tra Định Kỳ",
      description: "Xe được bảo dưỡng và kiểm tra kỹ thuật định kỳ theo quy định",
      icon: "🔧"
    },
    {
      title: "Tài Xế Chuyên Nghiệp",
      description: "Đội ngũ tài xế có bằng lái phù hợp và kinh nghiệm lâu năm",
      icon: "👨‍✈️"
    },
    {
      title: "Hỗ Trợ 24/7",
      description: "Hotline hỗ trợ khẩn cấp hoạt động 24/7 trong suốt chuyến đi",
      icon: "📞"
    }
  ];

  const bookingSteps = [
    {
      step: "1",
      title: "Chọn Xe",
      description: "Lựa chọn loại xe phù hợp với nhu cầu và số lượng người"
    },
    {
      step: "2",
      title: "Đặt Lịch",
      description: "Chọn ngày giờ và địa điểm đón theo yêu cầu"
    },
    {
      step: "3",
      title: "Xác Nhận",
      description: "Xác nhận thông tin và thanh toán đặt cọc"
    },
    {
      step: "4",
      title: "Sử Dụng",
      description: "Nhận xe đúng giờ và bắt đầu chuyến đi"
    }
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
            Dịch Vụ Vận Chuyển
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Đa dạng phương tiện vận chuyển an toàn và tiện lợi cho mọi nhu cầu du lịch
          </p>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Đội Xe Đa Dạng
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Từ xe máy linh hoạt đến xe bus cao cấp, chúng tôi có đầy đủ phương tiện cho mọi nhóm khách
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="traditional-card hover-lift overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl font-bold text-red-900">
                      {vehicle.name}
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.capacity}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-800 mb-2">Tính năng:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {vehicle.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-600 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-red-900">{vehicle.price}</span>
                    </div>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                      Đặt Xe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Dịch Vụ Vận Chuyển
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Các gói dịch vụ vận chuyển đa dạng phù hợp với mọi nhu cầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-yellow-700 mb-4">
                  {service.price}
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <span className="text-yellow-600 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                  Đặt Ngay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              An Toàn & Chất Lượng
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cam kết mang đến dịch vụ vận chuyển an toàn và chất lượng cao nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-yellow-400 mb-6">🚗</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Quy Trình Đặt Xe
            </h2>
            <p className="text-yellow-100 text-lg">
              4 bước đơn giản để đặt xe và bắt đầu chuyến đi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-yellow-100">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Đặt Xe Ngay
              </a>
              <a
                href="tel:024382xxxxx"
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                📞 Gọi Hotline
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}