import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NewsPage() {
  const featuredNews = {
    id: 1,
    title: "Du Lịch Hà Nội Nhận Giải Thưởng 'Công Ty Du Lịch Xuất Sắc 2024'",
    excerpt: "Công ty Du Lịch Hà Nội vinh dự nhận giải thưởng danh giá từ Hiệp hội Du lịch Việt Nam, ghi nhận những đóng góp tích cực cho ngành du lịch trong năm qua.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Ban Biên Tập",
    date: "20 Tháng 12, 2024",
    category: "Tin Công Ty",
    readTime: "5 phút đọc"
  };

  const newsCategories = [
    { name: "Tất Cả", count: 24, active: true },
    { name: "Tin Công Ty", count: 8, active: false },
    { name: "Khuyến Mãi", count: 6, active: false },
    { name: "Sự Kiện", count: 5, active: false },
    { name: "Thông Báo", count: 5, active: false }
  ];

  const newsList = [
    {
      id: 2,
      title: "Khuyến Mãi Đặc Biệt Mừng Năm Mới 2025",
      excerpt: "Giảm giá lên đến 30% cho tất cả các tour du lịch Hà Nội trong tháng 1/2025. Cơ hội tuyệt vời để khám phá thủ đô với chi phí tiết kiệm.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phòng Marketing",
      date: "18 Tháng 12, 2024",
      category: "Khuyến Mãi",
      readTime: "3 phút đọc"
    },
    {
      id: 3,
      title: "Ra Mắt Tour Mới: 'Hà Nội Xưa Và Nay'",
      excerpt: "Tour độc đáo kết hợp tham quan các di tích lịch sử cổ kính và khám phá Hà Nội hiện đại, mang đến góc nhìn toàn diện về thủ đô.",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phòng Tour",
      date: "15 Tháng 12, 2024",
      category: "Tin Công Ty",
      readTime: "4 phút đọc"
    },
    {
      id: 4,
      title: "Sự Kiện Giao Lưu Văn Hóa Việt - Nhật",
      excerpt: "Du Lịch Hà Nội tham gia tổ chức sự kiện giao lưu văn hóa, giới thiệu nét đẹp truyền thống Việt Nam đến bạn bè quốc tế.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Ban Tổ Chức",
      date: "12 Tháng 12, 2024",
      category: "Sự Kiện",
      readTime: "6 phút đọc"
    },
    {
      id: 5,
      title: "Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025",
      excerpt: "Thông báo lịch nghỉ Tết Nguyên Đán và các tour đặc biệt trong dịp lễ. Đặt tour sớm để có giá tốt nhất.",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phòng Hành Chính",
      date: "10 Tháng 12, 2024",
      category: "Thông Báo",
      readTime: "2 phút đọc"
    },
    {
      id: 6,
      title: "Đào Tạo Nâng Cao Cho Đội Ngũ Hướng Dẫn Viên",
      excerpt: "Chương trình đào tạo chuyên sâu về lịch sử, văn hóa và kỹ năng thuyết trình cho đội ngũ hướng dẫn viên.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phòng Đào Tạo",
      date: "8 Tháng 12, 2024",
      category: "Tin Công Ty",
      readTime: "4 phút đọc"
    },
    {
      id: 7,
      title: "Chương Trình Ưu Đãi Cho Khách Hàng Thân Thiết",
      excerpt: "Ra mắt chương trình loyalty với nhiều ưu đãi hấp dẫn dành cho khách hàng đã sử dụng dịch vụ của chúng tôi.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phòng CSKH",
      date: "5 Tháng 12, 2024",
      category: "Khuyến Mãi",
      readTime: "3 phút đọc"
    }
  ];

  const upcomingEvents = [
    {
      date: "25/12/2024",
      title: "Lễ Giáng Sinh Tại Văn Phòng",
      time: "18:00 - 21:00"
    },
    {
      date: "31/12/2024",
      title: "Tiệc Tất Niên Công Ty",
      time: "19:00 - 23:00"
    },
    {
      date: "15/01/2025",
      title: "Hội Thảo Du Lịch Bền Vững",
      time: "14:00 - 17:00"
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
            Tin Tức & Sự Kiện
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Cập nhật những thông tin mới nhất về công ty và ngành du lịch
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Tin Nổi Bật
            </h2>
          </div>

          <div className="traditional-card hover-lift overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredNews.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>{featuredNews.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredNews.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredNews.readTime}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-red-900 mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                <Link
                  href={`/news/${featuredNews.id}`}
                  className="btn-traditional inline-block"
                >
                  Đọc Tiếp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories & List */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Categories Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-4">
                  {newsCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        category.active
                          ? 'bg-red-600 text-white'
                          : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsList.map((news) => (
                  <article key={news.id} className="traditional-card hover-lift group">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span>{news.author}</span>
                        <span className="mx-2">•</span>
                        <span>{news.date}</span>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-red-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {news.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-600">{news.readTime}</span>
                        <Link
                          href={`/news/${news.id}`}
                          className="text-red-600 hover:text-yellow-700 font-semibold transition-colors duration-300"
                        >
                          Đọc Tiếp →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-traditional text-lg px-10 py-4">
                  Xem Thêm Tin Tức
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Upcoming Events */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-6">
                  Sự Kiện Sắp Tới
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                      <div className="text-sm text-red-600 font-semibold">{event.date}</div>
                      <h4 className="font-semibold text-red-900 mb-1">{event.title}</h4>
                      <div className="text-sm text-gray-600">{event.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Đăng Ký Nhận Tin
                </h3>
                <p className="text-gray-700 mb-4">
                  Nhận thông tin mới nhất về tour và khuyến mãi
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
                  />
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    Đăng Ký
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Liên Kết Nhanh
                </h3>
                <div className="space-y-3">
                  <Link href="/tours" className="block text-gray-700 hover:text-red-600 transition-colors duration-300">
                    → Xem Tất Cả Tour
                  </Link>
                  <Link href="/booking" className="block text-gray-700 hover:text-red-600 transition-colors duration-300">
                    → Đặt Tour Online
                  </Link>
                  <Link href="/contact" className="block text-gray-700 hover:text-red-600 transition-colors duration-300">
                    → Liên Hệ Tư Vấn
                  </Link>
                  <Link href="/about" className="block text-gray-700 hover:text-red-600 transition-colors duration-300">
                    → Về Chúng Tôi
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="traditional-card p-6">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Thông Tin Liên Hệ
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">📍</span>
                    <span>123 Phố Cổ, Hoàn Kiếm, Hà Nội</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">📞</span>
                    <span>024 3825 xxxx</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-600 mr-2">✉️</span>
                    <span>info@dulichhanoi.vn</span>
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