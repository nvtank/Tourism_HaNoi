import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Địa Chỉ Văn Phòng",
      details: ["123 Phố Cổ, Quận Hoàn Kiếm", "Hà Nội, Việt Nam"],
      color: "text-red-600"
    },
    {
      icon: "📞",
      title: "Điện Thoại",
      details: ["Hotline: 024 3825 xxxx", "Mobile: 0987 654 321"],
      color: "text-yellow-600"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@dulichhanoi.vn", "booking@dulichhanoi.vn"],
      color: "text-red-600"
    },
    {
      icon: "🕒",
      title: "Giờ Làm Việc",
      details: ["Thứ 2 - Thứ 6: 8:00 - 18:00", "Thứ 7 - CN: 8:00 - 17:00"],
      color: "text-yellow-600"
    }
  ];

  const offices = [
    {
      name: "Văn Phòng Chính",
      address: "123 Phố Cổ, Hoàn Kiếm, Hà Nội",
      phone: "024 3825 xxxx",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Chi Nhánh Tây Hồ",
      address: "456 Đường Thanh Niên, Tây Hồ, Hà Nội",
      phone: "024 3719 xxxx",
      image: "https://images.pexels.com/photos/5207264/pexels-photo-5207264.jpeg?auto=compress&cs=tinysrgb&w=400"
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
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn 24/7
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className={`text-5xl mb-4 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="traditional-card p-8">
              <div className="text-center mb-8">
                <div className="text-4xl text-red-600 mb-4">❀</div>
                <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                  Gửi Tin Nhắn
                </h2>
                <p className="text-gray-700">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong 24h
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-800 mb-2">
                    Chủ Đề
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                    <option>Tư vấn tour du lịch</option>
                    <option>Đặt tour</option>
                    <option>Khiếu nại dịch vụ</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-800 mb-2">
                    Nội Dung *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nhập nội dung tin nhắn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-traditional text-lg py-4"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>

            {/* Map & Offices */}
            <div className="space-y-8">
              {/* Map */}
              <div className="traditional-card p-8">
                <h3 className="font-display text-2xl font-bold text-red-900 mb-6 text-center">
                  Vị Trí Văn Phòng
                </h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Bản đồ Google Maps</p>
                    <p className="text-sm">123 Phố Cổ, Hoàn Kiếm, Hà Nội</p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="traditional-card p-6 flex items-center space-x-4">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-display text-lg font-bold text-red-900 mb-1">
                        {office.name}
                      </h4>
                      <p className="text-gray-700 text-sm mb-1">{office.address}</p>
                      <p className="text-yellow-700 font-semibold">{office.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">🚨</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Hỗ Trợ Khẩn Cấp 24/7
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Trong trường hợp khẩn cấp, vui lòng liên hệ hotline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0987654321"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              📞 0987 654 321
            </a>
            <a
              href="mailto:emergency@dulichhanoi.vn"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              ✉️ emergency@dulichhanoi.vn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}