import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SignupPage() {
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
            Đăng Ký Tài Khoản
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Tạo tài khoản để nhận ưu đãi đặc biệt và quản lý tour dễ dàng
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="traditional-card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-900 font-bold text-2xl">河</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-red-900 mb-2">
                Tạo Tài Khoản Mới
              </h2>
              <p className="text-gray-600">
                Điền thông tin bên dưới để tạo tài khoản
              </p>
            </div>

            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-4">
                  Thông Tin Cá Nhân
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Họ và tên đệm *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nguyễn Văn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Tên *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="An"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-4">
                  Thông Tin Liên Hệ
                </h3>
                <div className="space-y-4">
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
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="0987 654 321"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Giới tính
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                        <option>Chọn giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-4">
                  Địa Chỉ
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                      placeholder="Số nhà, tên đường"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Tỉnh/Thành phố
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                        <option>Chọn tỉnh/thành</option>
                        <option>Hà Nội</option>
                        <option>TP. Hồ Chí Minh</option>
                        <option>Đà Nẵng</option>
                        <option>Hải Phòng</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Quận/Huyện
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                        <option>Chọn quận/huyện</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">
                        Phường/Xã
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300">
                        <option>Chọn phường/xã</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-4">
                  Mật Khẩu
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Mật khẩu *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập mật khẩu (tối thiểu 8 ký tự)"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
                      >
                        👁️
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-red-800 mb-2">
                      Xác nhận mật khẩu *
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
                      >
                        👁️
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h3 className="font-display text-lg font-bold text-red-900 mb-4">
                  Sở Thích Du Lịch
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Văn hóa', 'Lịch sử', 'Ẩm thực', 'Nghệ thuật', 'Kiến trúc', 'Thiên nhiên'].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Tôi đồng ý với{' '}
                    <Link href="/terms" className="text-red-600 hover:text-yellow-700 font-semibold">
                      Điều khoản sử dụng
                    </Link>{' '}
                    và{' '}
                    <Link href="/privacy" className="text-red-600 hover:text-yellow-700 font-semibold">
                      Chính sách bảo mật
                    </Link>{' '}
                    của Du Lịch Hà Nội.
                  </span>
                </label>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700 leading-relaxed">
                    Tôi muốn nhận email thông báo về tour mới và khuyến mãi đặc biệt.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-traditional text-lg py-4"
              >
                Tạo Tài Khoản
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Đã có tài khoản?{' '}
                <Link
                  href="/login"
                  className="text-red-600 hover:text-yellow-700 font-semibold"
                >
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}