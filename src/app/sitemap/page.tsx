import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Trang Chính",
      pages: [
        { name: "Trang Chủ", url: "/", description: "Trang chủ chính của website" },
        { name: "Giới Thiệu", url: "/about", description: "Thông tin về công ty và đội ngũ" },
        { name: "Liên Hệ", url: "/contact", description: "Thông tin liên hệ và form gửi tin nhắn" }
      ]
    },
    {
      category: "Tour Du Lịch",
      pages: [
        { name: "Tất Cả Tour", url: "/tours", description: "Danh sách tất cả các tour du lịch" },
        { name: "Tour Phố Cổ", url: "/tours/pho-co-ha-noi", description: "Tour khám phá 36 phố phường cổ kính" },
        { name: "Tour Văn Miếu", url: "/tours/van-mieu", description: "Tham quan trường đại học đầu tiên Việt Nam" },
        { name: "Tour Lăng Bác", url: "/tours/lang-bac", description: "Viếng thăm lăng Chủ tịch Hồ Chí Minh" },
        { name: "Đặt Tour", url: "/booking", description: "Form đặt tour online" }
      ]
    },
    {
      category: "Tin Tức & Blog",
      pages: [
        { name: "Tin Tức", url: "/blog", description: "Tin tức và bài viết về du lịch Hà Nội" },
        { name: "Tin Công Ty", url: "/news", description: "Tin tức về hoạt động của công ty" },
        { name: "Sự Kiện", url: "/news", description: "Các sự kiện và hoạt động đặc biệt" }
      ]
    },
    {
      category: "Dịch Vụ",
      pages: [
        { name: "Hướng Dẫn Viên", url: "/guide", description: "Thông tin về đội ngũ hướng dẫn viên" },
        { name: "Vận Chuyển", url: "/transport", description: "Dịch vụ thuê xe và vận chuyển" },
        { name: "Giỏ Hàng", url: "/cart", description: "Xem và quản lý tour đã chọn" },
        { name: "Thanh Toán", url: "/checkout", description: "Hoàn tất thanh toán đặt tour" }
      ]
    },
    {
      category: "Tài Khoản",
      pages: [
        { name: "Đăng Nhập", url: "/login", description: "Đăng nhập vào tài khoản" },
        { name: "Đăng Ký", url: "/signup", description: "Tạo tài khoản mới" }
      ]
    },
    {
      category: "Công Ty",
      pages: [
        { name: "Đội Ngũ", url: "/team", description: "Giới thiệu ban lãnh đạo và nhân viên" },
        { name: "Tuyển Dụng", url: "/careers", description: "Cơ hội nghề nghiệp tại công ty" }
      ]
    },
    {
      category: "Hỗ Trợ",
      pages: [
        { name: "Câu Hỏi Thường Gặp", url: "/faq", description: "Giải đáp các thắc mắc phổ biến" },
        { name: "Điều Khoản Sử Dụng", url: "/terms", description: "Điều khoản và điều kiện sử dụng dịch vụ" },
        { name: "Chính Sách Bảo Mật", url: "/privacy", description: "Chính sách bảo vệ thông tin cá nhân" },
        { name: "Sơ Đồ Trang Web", url: "/sitemap", description: "Bản đồ cấu trúc website" }
      ]
    }
  ];

  const quickStats = [
    { number: "25+", label: "Trang Web" },
    { number: "50+", label: "Tour Du Lịch" },
    { number: "100+", label: "Bài Viết" },
    { number: "24/7", label: "Hỗ Trợ" }
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
            Sơ Đồ Trang Web
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Khám phá toàn bộ cấu trúc và nội dung của website Du Lịch Hà Nội
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Cấu Trúc Website
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tìm hiểu về tất cả các trang và dịch vụ có sẵn trên website của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="traditional-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                  <h3 className="font-display text-2xl font-bold text-red-900">
                    {section.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="border-l-2 border-yellow-200 pl-4 hover:border-red-500 transition-colors duration-300">
                      <Link
                        href={page.url}
                        className="block group"
                      >
                        <h4 className="font-semibold text-red-900 group-hover:text-yellow-700 transition-colors duration-300 mb-1">
                          {page.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {page.description}
                        </p>
                        <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded inline-block">
                          {page.url}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Navigation */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-3xl font-bold text-red-900 mb-6">
              Tìm Kiếm Nhanh
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Không tìm thấy trang bạn cần? Sử dụng tìm kiếm hoặc liên hệ với chúng tôi
            </p>
          </div>

          <div className="traditional-card p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Tìm kiếm trang, tour, dịch vụ..."
                className="flex-1 px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                Tìm Kiếm
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-red-900 mb-2">Tour Phổ Biến</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/tours" className="block text-gray-600 hover:text-red-600">Tour Phố Cổ</Link>
                  <Link href="/tours" className="block text-gray-600 hover:text-red-600">Tour Văn Miếu</Link>
                  <Link href="/tours" className="block text-gray-600 hover:text-red-600">Tour Ẩm Thực</Link>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">📞</div>
                <h4 className="font-semibold text-red-900 mb-2">Liên Hệ Nhanh</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">Hotline: 024 3825 xxxx</p>
                  <p className="text-gray-600">Email: info@dulichhanoi.vn</p>
                  <Link href="/contact" className="text-red-600 hover:text-yellow-700">Form Liên Hệ</Link>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">❓</div>
                <h4 className="font-semibold text-red-900 mb-2">Hỗ Trợ</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/faq" className="block text-gray-600 hover:text-red-600">Câu Hỏi Thường Gặp</Link>
                  <Link href="/terms" className="block text-gray-600 hover:text-red-600">Điều Khoản</Link>
                  <Link href="/privacy" className="block text-gray-600 hover:text-red-600">Bảo Mật</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XML Sitemap */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">🗂️</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Sitemap XML
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Dành cho các công cụ tìm kiếm và SEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sitemap.xml"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Tải Sitemap XML
            </a>
            <a
              href="/robots.txt"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Xem Robots.txt
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}