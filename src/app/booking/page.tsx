'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Tour, CustomerInfo, BookingData } from '@/types/booking';

export default function BookingPage() {
  const [selectedTour, setSelectedTour] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    specialRequests: ''
  });

  const popularTours: Tour[] = [
    {
      id: 'pho-co',
      name: "Tour Phố Cổ Hà Nội",
      price: 500000,
      duration: "1 ngày",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Khám phá 36 phố phường cổ kính với lịch sử hàng nghìn năm"
    },
    {
      id: 'van-mieu',
      name: "Tour Văn Miếu - Quốc Tử Giám",
      price: 300000,
      duration: "Nửa ngày",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Thăm trường đại học đầu tiên của Việt Nam"
    },
    {
      id: 'am-thuc',
      name: "Tour Ẩm Thực Hà Nội",
      price: 600000,
      duration: "1 ngày",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Khám phá tinh hoa ẩm thực Hà Nội"
    },
    {
      id: 'lang-bac',
      name: "Tour Lăng Chủ Tịch Hồ Chí Minh",
      price: 200000,
      duration: "Nửa ngày",
      image: "https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Tham quan nơi an nghỉ của Bác Hồ kính yêu"
    },
    {
      id: 'lang-nghe',
      name: "Tour Làng Nghề Truyền Thống",
      price: 700000,
      duration: "1 ngày",
      image: "https://images.pexels.com/photos/5207264/pexels-photo-5207264.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Tham quan các làng nghề nổi tiếng xung quanh Hà Nội"
    },
    {
      id: 'ha-noi-dem',
      name: "Tour Hà Nội Về Đêm",
      price: 400000,
      duration: "Tối (3 tiếng)",
      image: "https://images.pexels.com/photos/2412600/pexels-photo-2412600.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Khám phá vẻ đẹp lung linh của Hà Nội về đêm"
    }
  ];

  // Check if a tour was pre-selected from tours page
  useEffect(() => {
    const preSelectedTour = localStorage.getItem('selectedTour');
    if (preSelectedTour) {
      const tourData = JSON.parse(preSelectedTour);
      // Find matching tour by title or id
      const matchingTour = popularTours.find(tour => 
        tour.name === tourData.title || tour.id === tourData.id
      );
      if (matchingTour) {
        setSelectedTour(matchingTour.id);
      }
      // Clear the stored selection
      localStorage.removeItem('selectedTour');
    }
  }, [popularTours]);

  const selectedTourData = popularTours.find(tour => tour.id === selectedTour);
  const childrenPrice = selectedTourData ? selectedTourData.price * 0.5 : 0;
  const subtotal = selectedTourData ? (selectedTourData.price * adults) + (childrenPrice * children) : 0;
  const discount = subtotal > 1000000 ? subtotal * 0.1 : 0; // 10% discount for orders over 1M
  const total = subtotal - discount;

  const handleInputChange = useCallback((field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTour || !selectedDate || !customerInfo.fullName || !customerInfo.phone || !customerInfo.email) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }

    if (!selectedTourData) {
      alert('Vui lòng chọn tour!');
      return;
    }

    // Create booking data
    const bookingData: BookingData = {
      tour: selectedTourData,
      date: selectedDate,
      adults,
      children,
      customerInfo,
      pricing: {
        subtotal,
        discount,
        total
      },
      bookingId: 'BK' + Date.now(),
      createdAt: new Date().toISOString()
    };

    // Store booking data in localStorage for checkout page
    localStorage.setItem('currentBooking', JSON.stringify(bookingData));
    
    // Redirect to checkout
    window.location.href = '/checkout';
  }, [selectedTour, selectedDate, customerInfo, selectedTourData, subtotal, discount, total, adults, children]);

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Booking Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Tour Selection */}
                <div className="traditional-card p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl text-red-600 mb-4">❀</div>
                    <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                      1. Chọn Tour Du Lịch
                    </h2>
                    <p className="text-gray-700">
                      Lựa chọn tour phù hợp với sở thích của bạn
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {popularTours.map((tour) => (
                      <label key={tour.id} className="cursor-pointer group">
                        <input
                          type="radio"
                          name="tour"
                          value={tour.id}
                          checked={selectedTour === tour.id}
                          onChange={(e) => setSelectedTour(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`border-2 rounded-lg p-4 transition-all duration-300 ${
                          selectedTour === tour.id 
                            ? 'border-red-500 bg-red-50 shadow-lg' 
                            : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                        }`}>
                          <Image
                            src={tour.image}
                            alt={tour.name}
                            width={300}
                            height={128}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-semibold text-red-900 mb-2">{tour.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{tour.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{tour.duration}</span>
                            <span className="font-bold text-red-600">
                              {tour.price.toLocaleString('vi-VN')} VNĐ
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date & Participants */}
                <div className="traditional-card p-8">
                  <h2 className="font-display text-3xl font-bold text-red-900 mb-6 text-center">
                    2. Thời Gian & Số Người
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Ngày Khởi Hành *
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Số Người Lớn *
                      </label>
                      <select 
                        value={adults}
                        onChange={(e) => setAdults(parseInt(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} người</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Số Trẻ Em (5-12 tuổi)
                      </label>
                      <select 
                        value={children}
                        onChange={(e) => setChildren(parseInt(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      >
                        {[0,1,2,3,4,5].map(num => (
                          <option key={num} value={num}>{num} trẻ em</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {children > 0 && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>Lưu ý:</strong> Trẻ em từ 5-12 tuổi được giảm 50% giá tour. 
                        Trẻ em dưới 5 tuổi miễn phí (không tính ghế riêng).
                      </p>
                    </div>
                  )}
                </div>

                {/* Customer Information */}
                <div className="traditional-card p-8">
                  <h2 className="font-display text-3xl font-bold text-red-900 mb-6 text-center">
                    3. Thông Tin Khách Hàng
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Họ và Tên *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập họ và tên đầy đủ"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Số Điện Thoại *
                      </label>
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập số điện thoại"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập địa chỉ email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Địa Chỉ
                      </label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập địa chỉ"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Yêu Cầu Đặc Biệt
                    </label>
                    <textarea
                      rows={4}
                      value={customerInfo.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nhập yêu cầu đặc biệt (dị ứng thực phẩm, nhu cầu đặc biệt, v.v...)"
                    ></textarea>
                  </div>
                </div>

                {/* Terms */}
                <div className="traditional-card p-8">
                  <h2 className="font-display text-3xl font-bold text-red-900 mb-6 text-center">
                    4. Xác Nhận Đặt Tour
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                        required
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
                        required
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

              {/* Booking Summary Sidebar */}
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="traditional-card p-6 sticky top-4">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-6">
                    Tóm Tắt Đặt Tour
                  </h3>
                  
                  {selectedTourData ? (
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <Image
                          src={selectedTourData.image}
                          alt={selectedTourData.name}
                          width={300}
                          height={128}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-semibold text-red-900 mb-2">{selectedTourData.name}</h4>
                        <p className="text-sm text-gray-600">{selectedTourData.duration}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Ngày khởi hành:</span>
                          <span className="font-semibold">
                            {selectedDate ? new Date(selectedDate).toLocaleDateString('vi-VN') : 'Chưa chọn'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Người lớn ({adults}):</span>
                          <span className="font-semibold">
                            {(selectedTourData.price * adults).toLocaleString('vi-VN')} VNĐ
                          </span>
                        </div>
                        {children > 0 && (
                          <div className="flex justify-between">
                            <span>Trẻ em ({children}):</span>
                            <span className="font-semibold">
                              {(childrenPrice * children).toLocaleString('vi-VN')} VNĐ
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Tạm tính:</span>
                          <span className="font-semibold">{subtotal.toLocaleString('vi-VN')} VNĐ</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Giảm giá (10%):</span>
                            <span className="font-semibold">-{discount.toLocaleString('vi-VN')} VNĐ</span>
                          </div>
                        )}
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <div className="flex justify-between text-lg font-bold text-red-900">
                            <span>Tổng cộng:</span>
                            <span>{total.toLocaleString('vi-VN')} VNĐ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">Vui lòng chọn tour</p>
                  )}

                  <button
                    type="submit"
                    disabled={!selectedTour || !selectedDate}
                    className="w-full btn-traditional text-lg py-4 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Tiến Hành Thanh Toán
                  </button>
                </div>

                {/* Contact Support */}
                <div className="traditional-card p-6">
                  <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                    Cần Hỗ Trợ?
                  </h4>
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
                  <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                    Tại Sao Chọn Chúng Tôi?
                  </h4>
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
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}