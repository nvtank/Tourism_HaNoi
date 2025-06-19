import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const orderItems = [
    {
      id: 1,
      name: "Tour Phố Cổ Hà Nội",
      date: "25/12/2024",
      adults: 2,
      children: 1,
      price: 1250000
    },
    {
      id: 2,
      name: "Tour Ẩm Thực Hà Nội",
      date: "28/12/2024",
      adults: 2,
      children: 0,
      price: 1200000
    }
  ];

  const subtotal = 2450000;
  const discount = 245000;
  const total = 2205000;

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
            Thanh Toán
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Hoàn tất đặt tour và bắt đầu hành trình khám phá Hà Nội
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Customer Information */}
              <div className="traditional-card p-8">
                <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                  1. Thông Tin Khách Hàng
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Họ và Tên *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nguyễn Văn An"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Số Điện Thoại *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="0987 654 321"
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
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Địa Chỉ
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Số nhà, tên đường, quận/huyện, tỉnh/thành"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Ghi Chú Đặc Biệt
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Yêu cầu đặc biệt, dị ứng thực phẩm, v.v..."
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="traditional-card p-8">
                <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                  2. Phương Thức Thanh Toán
                </h2>
                
                <div className="space-y-4">
                  {/* Bank Transfer */}
                  <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      className="mt-1 w-5 h-5 text-red-600"
                      defaultChecked
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">🏦</span>
                        <h3 className="font-semibold text-red-900">Chuyển Khoản Ngân Hàng</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Chuyển khoản trực tiếp vào tài khoản ngân hàng của công ty
                      </p>
                      <div className="bg-yellow-50 p-3 rounded text-sm">
                        <p><strong>Ngân hàng:</strong> Vietcombank - Chi nhánh Hoàn Kiếm</p>
                        <p><strong>Số tài khoản:</strong> 0123456789</p>
                        <p><strong>Chủ tài khoản:</strong> Công ty Du Lịch Hà Nội</p>
                        <p><strong>Nội dung:</strong> [Họ tên] - [Số điện thoại] - Tour</p>
                      </div>
                    </div>
                  </label>

                  {/* Credit Card */}
                  <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      className="mt-1 w-5 h-5 text-red-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">💳</span>
                        <h3 className="font-semibold text-red-900">Thẻ Tín Dụng/Ghi Nợ</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Thanh toán an toàn với Visa, Mastercard, JCB
                      </p>
                    </div>
                  </label>

                  {/* E-wallet */}
                  <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                    <input
                      type="radio"
                      name="payment"
                      value="ewallet"
                      className="mt-1 w-5 h-5 text-red-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">📱</span>
                        <h3 className="font-semibold text-red-900">Ví Điện Tử</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Thanh toán nhanh chóng với MoMo, ZaloPay, VNPay
                      </p>
                      <div className="flex space-x-4">
                        <img src="/api/placeholder/60/30" alt="MoMo" className="h-8" />
                        <img src="/api/placeholder/60/30" alt="ZaloPay" className="h-8" />
                        <img src="/api/placeholder/60/30" alt="VNPay" className="h-8" />
                      </div>
                    </div>
                  </label>

                  {/* Cash */}
                  <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      className="mt-1 w-5 h-5 text-red-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">💵</span>
                        <h3 className="font-semibold text-red-900">Tiền Mặt</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Thanh toán trực tiếp tại văn phòng hoặc khi khởi hành
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="traditional-card p-8">
                <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                  3. Xác Nhận Đặt Tour
                </h2>
                
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      Tôi đã đọc và đồng ý với{' '}
                      <a href="/terms" className="text-red-600 hover:text-yellow-700 font-semibold">
                        Điều khoản sử dụng
                      </a>{' '}
                      và{' '}
                      <a href="/privacy" className="text-red-600 hover:text-yellow-700 font-semibold">
                        Chính sách bảo mật
                      </a>{' '}
                      của Du Lịch Hà Nội.
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      Tôi xác nhận thông tin đặt tour là chính xác và đồng ý với{' '}
                      <a href="/terms" className="text-red-600 hover:text-yellow-700 font-semibold">
                        Chính sách hủy tour
                      </a>.
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      Tôi muốn nhận email thông báo về tour và khuyến mãi đặc biệt.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-6">
                  Đơn Hàng Của Bạn
                </h3>
                
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-red-900 mb-2">{item.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Ngày: {item.date}</p>
                        <p>Người lớn: {item.adults} | Trẻ em: {item.children}</p>
                        <p className="font-semibold text-red-900">
                          {item.price.toLocaleString('vi-VN')} VNĐ
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{subtotal.toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Giảm giá:</span>
                    <span>-{discount.toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-red-900 border-t border-gray-200 pt-3">
                    <span>Tổng cộng:</span>
                    <span>{total.toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                </div>

                <button className="w-full btn-traditional text-lg py-4 mt-6">
                  Xác Nhận Đặt Tour
                </button>
              </div>

              {/* Security */}
              <div className="traditional-card p-6">
                <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                  Bảo Mật Thanh Toán
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🔒</span>
                    <span className="text-sm">Mã hóa SSL 256-bit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🛡️</span>
                    <span className="text-sm">Bảo mật PCI DSS</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-sm">Không lưu trữ thông tin thẻ</span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="traditional-card p-6">
                <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                  Hỗ Trợ Thanh Toán
                </h4>
                <div className="space-y-2 text-sm">
                  <p>📞 Hotline: 024 3825 xxxx</p>
                  <p>✉️ Email: payment@dulichhanoi.vn</p>
                  <p>💬 Chat: 8:00 - 22:00 hàng ngày</p>
                  <p className="text-gray-600 mt-3">
                    Gặp vấn đề khi thanh toán? Liên hệ ngay với chúng tôi!
                  </p>
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