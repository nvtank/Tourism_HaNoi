import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Tour Phố Cổ Hà Nội",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "25/12/2024",
      duration: "1 ngày",
      adults: 2,
      children: 1,
      price: 500000,
      totalPrice: 1250000 // 2 adults + 1 child (50% discount)
    },
    {
      id: 2,
      name: "Tour Ẩm Thực Hà Nội",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "28/12/2024",
      duration: "1 ngày",
      adults: 2,
      children: 0,
      price: 600000,
      totalPrice: 1200000
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discount = 245000; // 10% member discount
  const total = subtotal - discount;

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
            Giỏ Hàng
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Xem lại các tour đã chọn trước khi thanh toán
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="traditional-card p-6">
                  <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                    Tour Đã Chọn ({cartItems.length})
                  </h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Details */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="font-display text-xl font-bold text-red-900">
                                {item.name}
                              </h3>
                              <button className="text-red-600 hover:text-red-800 p-2">
                                🗑️
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                              <div>
                                <span className="font-semibold">Ngày:</span>
                                <p>{item.date}</p>
                              </div>
                              <div>
                                <span className="font-semibold">Thời gian:</span>
                                <p>{item.duration}</p>
                              </div>
                              <div>
                                <span className="font-semibold">Người lớn:</span>
                                <p>{item.adults} người</p>
                              </div>
                              <div>
                                <span className="font-semibold">Trẻ em:</span>
                                <p>{item.children} người</p>
                              </div>
                            </div>
                            
                            {/* Quantity and Price */}
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">Số lượng:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button className="px-3 py-1 hover:bg-gray-100">-</button>
                                  <span className="px-3 py-1 border-x">1</span>
                                  <button className="px-3 py-1 hover:bg-gray-100">+</button>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-600">
                                  {item.price.toLocaleString('vi-VN')} VNĐ/người
                                </p>
                                <p className="text-xl font-bold text-red-900">
                                  {item.totalPrice.toLocaleString('vi-VN')} VNĐ
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping */}
                <div className="text-center">
                  <Link
                    href="/tours"
                    className="inline-flex items-center text-red-600 hover:text-yellow-700 font-semibold"
                  >
                    ← Tiếp tục chọn tour
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <div className="traditional-card p-6">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-6">
                    Tóm Tắt Đơn Hàng
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span>{subtotal.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá thành viên (10%):</span>
                      <span>-{discount.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold text-red-900">
                        <span>Tổng cộng:</span>
                        <span>{total.toLocaleString('vi-VN')} VNĐ</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full btn-traditional text-center block mt-6"
                  >
                    Tiến Hành Thanh Toán
                  </Link>
                </div>

                {/* Promo Code */}
                <div className="traditional-card p-6">
                  <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                    Mã Giảm Giá
                  </h4>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Nhập mã giảm giá"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    />
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                      Áp dụng
                    </button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="traditional-card p-6">
                  <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                    Ưu Đãi Đặc Biệt
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-sm">Miễn phí hủy tour trước 7 ngày</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-sm">Bảo hiểm du lịch miễn phí</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-sm">Hỗ trợ 24/7 trong tour</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-sm">Đưa đón miễn phí nội thành</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="traditional-card p-6">
                  <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                    Cần Hỗ Trợ?
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>📞 Hotline: 024 3825 xxxx</p>
                    <p>✉️ Email: booking@dulichhanoi.vn</p>
                    <p>💬 Chat: 8:00 - 22:00 hàng ngày</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart */
            <div className="text-center py-20">
              <div className="traditional-card p-12 max-w-md mx-auto">
                <div className="text-6xl mb-6">🛒</div>
                <h2 className="font-display text-2xl font-bold text-red-900 mb-4">
                  Giỏ Hàng Trống
                </h2>
                <p className="text-gray-700 mb-8">
                  Bạn chưa có tour nào trong giỏ hàng. Hãy khám phá các tour tuyệt vời của chúng tôi!
                </p>
                <Link
                  href="/tours"
                  className="btn-traditional inline-block"
                >
                  Khám Phá Tour
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}