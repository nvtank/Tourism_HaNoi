'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  useEffect(() => {
    // Get booking data from localStorage
    const storedBooking = localStorage.getItem('currentBooking');
    if (storedBooking) {
      setBookingData(JSON.parse(storedBooking));
    } else {
      // Redirect to booking page if no data
      window.location.href = '/booking';
    }
  }, []);

  const handleCardInputChange = (field: string, value: string) => {
    setCardInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Create order confirmation
      const orderData = {
        ...bookingData,
        paymentMethod,
        paymentStatus: 'completed',
        orderId: 'ORDER' + Date.now(),
        paidAt: new Date().toISOString()
      };

      // Store order data
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      localStorage.removeItem('currentBooking');

      // Redirect to success page
      window.location.href = '/booking-success';
    }, 3000);
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p>Đang tải thông tin đặt tour...</p>
        </div>
      </div>
    );
  }

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Payment Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Information Review */}
                <div className="traditional-card p-8">
                  <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                    1. Thông Tin Khách Hàng
                  </h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-red-800">Họ và tên:</span>
                        <p className="text-gray-700">{bookingData.customerInfo.fullName}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Điện thoại:</span>
                        <p className="text-gray-700">{bookingData.customerInfo.phone}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Email:</span>
                        <p className="text-gray-700">{bookingData.customerInfo.email}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Địa chỉ:</span>
                        <p className="text-gray-700">{bookingData.customerInfo.address || 'Không có'}</p>
                      </div>
                    </div>
                    {bookingData.customerInfo.specialRequests && (
                      <div className="mt-4">
                        <span className="font-semibold text-red-800">Yêu cầu đặc biệt:</span>
                        <p className="text-gray-700">{bookingData.customerInfo.specialRequests}</p>
                      </div>
                    )}
                  </div>
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
                        checked={paymentMethod === 'bank'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 w-5 h-5 text-red-600"
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
                          <p><strong>Nội dung:</strong> {bookingData.bookingId} - {bookingData.customerInfo.fullName}</p>
                        </div>
                      </div>
                    </label>

                    {/* Credit Card */}
                    <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 w-5 h-5 text-red-600"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">💳</span>
                          <h3 className="font-semibold text-red-900">Thẻ Tín Dụng/Ghi Nợ</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Thanh toán an toàn với Visa, Mastercard, JCB
                        </p>
                        
                        {paymentMethod === 'card' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="md:col-span-2">
                              <label className="block text-sm font-semibold text-red-800 mb-2">
                                Số thẻ
                              </label>
                              <input
                                type="text"
                                value={cardInfo.cardNumber}
                                onChange={(e) => handleCardInputChange('cardNumber', formatCardNumber(e.target.value))}
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-red-800 mb-2">
                                Ngày hết hạn
                              </label>
                              <input
                                type="text"
                                value={cardInfo.expiryDate}
                                onChange={(e) => handleCardInputChange('expiryDate', formatExpiryDate(e.target.value))}
                                placeholder="MM/YY"
                                maxLength={5}
                                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-red-800 mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                value={cardInfo.cvv}
                                onChange={(e) => handleCardInputChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                                placeholder="123"
                                maxLength={4}
                                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
                                required
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-semibold text-red-800 mb-2">
                                Tên chủ thẻ
                              </label>
                              <input
                                type="text"
                                value={cardInfo.cardName}
                                onChange={(e) => handleCardInputChange('cardName', e.target.value)}
                                placeholder="NGUYEN VAN A"
                                className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
                                required
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </label>

                    {/* E-wallet */}
                    <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                      <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={paymentMethod === 'ewallet'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
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
                          <div className="bg-pink-100 px-3 py-1 rounded text-sm font-semibold text-pink-800">MoMo</div>
                          <div className="bg-blue-100 px-3 py-1 rounded text-sm font-semibold text-blue-800">ZaloPay</div>
                          <div className="bg-red-100 px-3 py-1 rounded text-sm font-semibold text-red-800">VNPay</div>
                        </div>
                      </div>
                    </label>

                    {/* Cash */}
                    <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors duration-300">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
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

                {/* Final Confirmation */}
                <div className="traditional-card p-8">
                  <h2 className="font-display text-2xl font-bold text-red-900 mb-6">
                    3. Xác Nhận Cuối Cùng
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                        required
                      />
                      <span className="text-gray-700 leading-relaxed">
                        Tôi xác nhận tất cả thông tin đã cung cấp là chính xác và đồng ý thanh toán cho đơn hàng này.
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                        required
                      />
                      <span className="text-gray-700 leading-relaxed">
                        Tôi đã đọc và hiểu{' '}
                        <a href="/terms" className="text-red-600 hover:text-yellow-700 font-semibold">
                          Chính sách hủy tour
                        </a>{' '}
                        và các điều khoản liên quan.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <div className="traditional-card p-6 sticky top-4">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-6">
                    Chi Tiết Đơn Hàng
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border-b border-gray-200 pb-4">
                      <img
                        src={bookingData.tour.image}
                        alt={bookingData.tour.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-red-900 mb-2">{bookingData.tour.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Ngày: {new Date(bookingData.date).toLocaleDateString('vi-VN')}</p>
                        <p>Thời gian: {bookingData.tour.duration}</p>
                        <p>Người lớn: {bookingData.adults} | Trẻ em: {bookingData.children}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span>{bookingData.pricing.subtotal.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                    {bookingData.pricing.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Giảm giá:</span>
                        <span>-{bookingData.pricing.discount.toLocaleString('vi-VN')} VNĐ</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold text-red-900 border-t border-gray-200 pt-3">
                      <span>Tổng cộng:</span>
                      <span>{bookingData.pricing.total.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn-traditional text-lg py-4 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Đang xử lý...
                      </div>
                    ) : (
                      'Xác Nhận Thanh Toán'
                    )}
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
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}