import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Về Chúng Tôi",
      links: [
        { href: "/about", label: "Giới Thiệu" },
        { href: "/team", label: "Đội Ngũ" },
        { href: "/careers", label: "Tuyển Dụng" },
        { href: "/news", label: "Tin Tức" }
      ]
    },
    {
      title: "Dịch Vụ",
      links: [
        { href: "/tours", label: "Tour Du Lịch" },
        { href: "/booking", label: "Đặt Tour" },
        { href: "/guide", label: "Hướng Dẫn Viên" },
        { href: "/transport", label: "Vận Chuyển" }
      ]
    },
    {
      title: "Hỗ Trợ",
      links: [
        { href: "/contact", label: "Liên Hệ" },
        { href: "/faq", label: "Câu Hỏi Thường Gặp" },
        { href: "/terms", label: "Điều Khoản" },
        { href: "/privacy", label: "Bảo Mật" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-red-900 font-bold text-xl">河</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Du Lịch Hà Nội</h3>
                  <p className="text-yellow-200 text-sm">Thăng Long Cổ Đô</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Khám phá vẻ đẹp cổ kính của thủ đô nghìn năm tuổi cùng những trải nghiệm văn hóa độc đáo và khó quên.
              </p>
              
              {/* Social media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300">
                  <span className="text-lg">📺</span>
                </a>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-display text-xl font-bold mb-6 text-yellow-300">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center group"
                      >
                        <span className="text-yellow-600 mr-2 group-hover:mr-3 transition-all duration-300">•</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-3">📍</span>
                <div>
                  <h5 className="font-semibold text-yellow-300">Địa Chỉ</h5>
                  <p className="text-gray-300">123 Phố Cổ, Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-3">📞</span>
                <div>
                  <h5 className="font-semibold text-yellow-300">Điện Thoại</h5>
                  <p className="text-gray-300">+84 24 3825 xxxx</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-3">✉️</span>
                <div>
                  <h5 className="font-semibold text-yellow-300">Email</h5>
                  <p className="text-gray-300">info@dulichhanoi.vn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © {currentYear} Du Lịch Hà Nội. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <Link href="/terms" className="hover:text-yellow-300 transition-colors duration-300">
                  Điều Khoản Sử Dụng
                </Link>
                <Link href="/privacy" className="hover:text-yellow-300 transition-colors duration-300">
                  Chính Sách Bảo Mật
                </Link>
                <Link href="/sitemap" className="hover:text-yellow-300 transition-colors duration-300">
                  Sơ Đồ Trang Web
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}