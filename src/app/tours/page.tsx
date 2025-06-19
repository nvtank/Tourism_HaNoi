'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ToursPage() {
  const tours = [
    {
      id: 'pho-co',
      title: "Tour Phố Cổ Hà Nội",
      description: "Khám phá 36 phố phường cổ kính với lịch sử hàng nghìn năm, thưởng thức ẩm thực đường phố và mua sắm tại các cửa hàng truyền thống.",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 500000,
      duration: "1 ngày",
      groupSize: "10-15 người",
      highlights: ["Đền Ngọc Sơn", "Hồ Hoàn Kiếm", "Chợ Đồng Xuân", "Phố Hàng Mã"],
      schedule: ["8:00 - Tập trung tại Hồ Hoàn Kiếm", "9:00 - Thăm Đền Ngọc Sơn", "11:00 - Dạo phố cổ", "12:00 - Ăn trưa", "14:00 - Chợ Đồng Xuân", "17:00 - Kết thúc tour"]
    },
    {
      id: 'van-mieu',
      title: "Tour Văn Miếu - Quốc Tử Giám",
      description: "Thăm trường đại học đầu tiên của Việt Nam, tìm hiểu về truyền thống hiếu học và nền giáo dục cổ truyền.",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 300000,
      duration: "Nửa ngày",
      groupSize: "15-20 người",
      highlights: ["Văn Miếu", "Quốc Tử Giám", "Bia tiến sĩ", "Khuê Văn Các"],
      schedule: ["8:00 - Tập trung tại cổng Văn Miếu", "8:30 - Thăm quan Văn Miếu", "10:00 - Quốc Tử Giám", "11:30 - Kết thúc tour"]
    },
    {
      id: 'lang-bac',
      title: "Tour Lăng Chủ Tịch Hồ Chí Minh",
      description: "Tham quan nơi an nghỉ của Bác Hồ kính yêu, tìm hiểu về cuộc đời và sự nghiệp của người cha già dân tộc.",
      image: "https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 200000,
      duration: "Nửa ngày",
      groupSize: "20-25 người",
      highlights: ["Lăng Bác Hồ", "Nhà sàn Bác Hồ", "Bảo tàng Hồ Chí Minh", "Chùa Một Cột"],
      schedule: ["7:30 - Tập trung tại Ba Đình", "8:00 - Lăng Bác Hồ", "9:30 - Nhà sàn", "10:30 - Bảo tàng", "11:30 - Kết thúc"]
    },
    {
      id: 'am-thuc',
      title: "Tour Ẩm Thực Hà Nội",
      description: "Khám phá tinh hoa ẩm thực Hà Nội từ món ăn đường phố đến nhà hàng cao cấp, trải nghiệm hương vị đặc trưng của thủ đô.",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 600000,
      duration: "1 ngày",
      groupSize: "8-12 người",
      highlights: ["Phở Hà Nội", "Bún Chả", "Chả Cá Lã Vọng", "Cà phê trứng"],
      schedule: ["8:00 - Phở sáng", "10:00 - Chè", "12:00 - Bún chả", "15:00 - Cà phê", "17:00 - Chả cá", "19:00 - Kết thúc"]
    },
    {
      id: 'lang-nghe',
      title: "Tour Làng Nghề Truyền Thống",
      description: "Tham quan các làng nghề nổi tiếng xung quanh Hà Nội, tìm hiểu về nghề thủ công truyền thống và văn hóa làng quê.",
      image: "https://images.pexels.com/photos/5207264/pexels-photo-5207264.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 700000,
      duration: "1 ngày",
      groupSize: "12-18 người",
      highlights: ["Làng gốm Bát Tràng", "Làng lụa Vạn Phúc", "Làng tranh Đông Hồ", "Làng đúc đồng"],
      schedule: ["7:00 - Khởi hành", "8:30 - Bát Tràng", "11:00 - Vạn Phúc", "14:00 - Đông Hồ", "17:00 - Về Hà Nội"]
    },
    {
      id: 'ha-noi-dem',
      title: "Tour Hà Nội Về Đêm",
      description: "Khám phá vẻ đẹp lung linh của Hà Nội về đêm, thưởng thức bia hơi và trải nghiệm cuộc sống về đêm của người Hà Nội.",
      image: "https://images.pexels.com/photos/2412600/pexels-photo-2412600.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: 400000,
      duration: "Tối (3 tiếng)",
      groupSize: "10-15 người",
      highlights: ["Hồ Hoàn Kiếm về đêm", "Phố đi bộ", "Bia hơi", "Chợ đêm"],
      schedule: ["18:00 - Tập trung", "18:30 - Hồ Hoàn Kiếm", "19:30 - Phố đi bộ", "20:30 - Bia hơi", "21:30 - Kết thúc"]
    }
  ];

  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [showQuickBooking, setShowQuickBooking] = useState(false);

  const handleBookTour = (tour: any) => {
    // Store selected tour in localStorage for booking page
    localStorage.setItem('selectedTour', JSON.stringify(tour));
    // Redirect to booking page
    window.location.href = '/booking';
  };

  const handleAddToCart = (tour: any) => {
    // Get existing cart items
    const existingCart = localStorage.getItem('cartItems');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];

    // Create cart item
    const cartItem = {
      id: tour.id + '-' + Date.now(),
      name: tour.title,
      image: tour.image,
      price: tour.price,
      duration: tour.duration,
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default to 7 days from now
      adults: 1,
      children: 0,
      totalPrice: tour.price,
      quantity: 1
    };

    // Add to cart
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Show confirmation
    alert('Đã thêm tour vào giỏ hàng!');
  };

  const openQuickBooking = (tour: any) => {
    setSelectedTour(tour);
    setShowQuickBooking(true);
  };

  const closeQuickBooking = () => {
    setShowQuickBooking(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="text-4xl text-yellow-400">❀</div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white text-shadow mb-6">
            Tour Du Lịch Hà Nội
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Khám phá những tour du lịch đa dạng và hấp dẫn tại thủ đô nghìn năm tuổi
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="traditional-card hover-lift group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {tour.duration}
                    </span>
                    <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {tour.groupSize}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-red-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                    {tour.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-800 mb-2">Điểm nổi bật:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {tour.highlights.slice(0, 4).map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-yellow-600 mr-2">•</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-red-800 mb-2">Lịch trình:</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      {tour.schedule.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-yellow-600 mr-2 mt-1">•</span>
                          {item}
                        </div>
                      ))}
                      {tour.schedule.length > 3 && (
                        <div className="text-yellow-700 font-medium">
                          ... và {tour.schedule.length - 3} hoạt động khác
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-red-900">
                        {tour.price.toLocaleString('vi-VN')} VNĐ
                      </span>
                      <span className="text-gray-600 text-sm">/người</span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleAddToCart(tour)}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 text-sm"
                        title="Thêm vào giỏ hàng"
                      >
                        🛒
                      </button>
                      <button 
                        onClick={() => handleBookTour(tour)}
                        className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105"
                      >
                        Đặt Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-20"></div>
              <div className="relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Cần Tư Vấn Tour Riêng?
                </h3>
                <p className="text-xl mb-8 text-yellow-100">
                  Liên hệ với chúng tôi để được tư vấn và thiết kế tour theo nhu cầu của bạn
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="btn-traditional text-lg px-10 py-4 bg-yellow-600 hover:bg-yellow-700"
                  >
                    Liên Hệ Tư Vấn
                  </a>
                  <a 
                    href="tel:024382xxxxx"
                    className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Gọi Ngay: 024 3825 xxxx
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Modal */}
      {showQuickBooking && selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-bold text-red-900">
                Đặt Tour Nhanh
              </h3>
              <button 
                onClick={closeQuickBooking}
                className="text-gray-500 hover:text-red-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <img
                src={selectedTour.image}
                alt={selectedTour.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-red-900 mb-2">{selectedTour.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{selectedTour.duration}</p>
              <p className="text-2xl font-bold text-red-900">
                {selectedTour.price.toLocaleString('vi-VN')} VNĐ/người
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleBookTour(selectedTour)}
                className="w-full btn-traditional text-lg py-3"
              >
                Đặt Tour Ngay
              </button>
              <button
                onClick={() => {
                  handleAddToCart(selectedTour);
                  closeQuickBooking();
                }}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Thêm Vào Giỏ Hàng
              </button>
              <button
                onClick={closeQuickBooking}
                className="w-full bg-transparent border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}