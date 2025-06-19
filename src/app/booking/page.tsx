import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const popularTours = [
    {
      id: 1,
      name: "Tour Phố Cổ Hà Nội",
      price: "500.000 VNĐ",
      duration: "1 ngày",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      name: "Tour Văn Miếu - Quốc Tử Giám",
      price: "300.000 VNĐ",
      duration: "Nửa ngày",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      name: "Tour Ẩm Thực Hà Nội",
      price: "600.000 VNĐ",
      duration: "1 ngày",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=300"
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
            Đặt Tour Du Lịch
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Đặt tour ngay hôm nay để khám phá vẻ đẹp Hà Nội cùng chúng tôi
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="traditional-card p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl text-red-600 mb-4">❀</div>
                  <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                    Thông Tin Đặt Tour
                  </h2>
                  <p className="text-gray-700">
                    Vui lòng điền đầy đủ thông tin để chúng tôi phục vụ bạn tốt nhất
                  </p>
                </div>

                <form className="space-y-8">
                  {/* Tour Selection */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                      1. Chọn Tour
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {popularTours.map((tour) => (
                        <label key={tour.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="tour"
                            value={tour.id}
                            className="sr-only"
                          />
                          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-red-500 transition-colors duration-300">
                            <img
                              src={tour.image}
                              alt={tour.name}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                            />
                            <h4 className="font-semibold text-red-900 mb-2">{tour.name}</h4>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{tour.duration}</span>
                              <span className="font-bold text-red-600">{tour.price}</span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Date & Participants */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                      2. Thời Gian & Số Người
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-red-800 mb-2">
                          Ngày Khởi Hành *
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-red-800 mb-2">
                          Số Người Lớn *
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                          <option>1 người</option>
                          <option>2 người</option>
                          <option>3 người</option>
                          <option>4 người</option>
                          <option>5+ người</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-red-800 mb-2">
                          Số Trẻ Em
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                          <option>0 trẻ em</option>
                          <option>1 trẻ em</option>
                          <option>2 trẻ em</option>
                          <option>3+ trẻ em</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                      3. Thông Tin Liên Hệ
                    </h3>
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
                          Địa Chỉ
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                          placeholder="Nhập địa chỉ"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                      4. Yêu Cầu Đặc Biệt
                    </h3>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nhập yêu cầu đặc biệt (nếu có)..."
                    ></textarea>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="terms" className="text-gray-700 leading-relaxed">
                      Tôi đồng ý với{' '}
                      <a href="/terms" className="text-red-600 hover:text-yellow-700 font-semibold">
                        Điều khoản sử dụng
                      </a>{' '}
                      và{' '}
                      <a href="/privacy" className="text-red-600 hover:text-yellow-700 font-semibold">
                        Chính sách bảo mật
                      </a>{' '}
                      của công ty.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-traditional text-lg py-4"
                  >
                    Đặt Tour Ngay
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Summary */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Tóm Tắt Đặt Tour
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Tour:</span>
                    <span className="font-semibold">Chưa chọn</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ngày:</span>
                    <span className="font-semibold">Chưa chọn</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Số người:</span>
                    <span className="font-semibold">0 người</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold text-red-900">
                      <span>Tổng cộng:</span>
                      <span>0 VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Cần Hỗ Trợ?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-red-600 mr-3">📞</span>
                    <div>
                      <p className="font-semibold">Hotline</p>
                      <p className="text-sm text-gray-600">024 3825 xxxx</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-3">✉️</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-600">booking@dulichhanoi.vn</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-3">💬</span>
                    <div>
                      <p className="font-semibold">Chat Online</p>
                      <p className="text-sm text-gray-600">8:00 - 22:00 hàng ngày</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Tại Sao Chọn Chúng Tôi?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span className="text-sm">Hướng dẫn viên chuyên nghiệp</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span className="text-sm">Giá cả hợp lý, minh bạch</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span className="text-sm">Dịch vụ 24/7</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span className="text-sm">Cam kết hoàn tiền 100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}