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

  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-4xl text-yellow-600">❀</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Tour Nổi Bật
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Những hành trình khám phá tinh hoa văn hóa và lịch sử của thủ đô nghìn năm tuổi
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="traditional-card hover-lift group cursor-pointer">
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
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
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-yellow-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-2xl font-bold text-red-900">{tour.price}</span>
                    <span className="text-gray-600 text-sm">/người</span>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
                    Đặt Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-traditional text-lg px-10 py-4">
            Xem Tất Cả Tour
          </button>
        </div>
      </div>
    </section>
  );
}