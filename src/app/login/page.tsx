import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LoginPage() {
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
            Đăng Nhập
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Đăng nhập để quản lý tour và nhận ưu đãi đặc biệt
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="traditional-card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-900 font-bold text-2xl">河</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-red-900 mb-2">
                Chào Mừng Trở Lại
              </h2>
              <p className="text-gray-600">
                Đăng nhập vào tài khoản của bạn
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-red-800 mb-2">
                  Email hoặc Số điện thoại
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                  placeholder="Nhập email hoặc số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-red-800 mb-2">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 border-2 border-yellow-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nhập mật khẩu"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
                  >
                    👁️
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Ghi nhớ đăng nhập</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-red-600 hover:text-yellow-700 font-semibold"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full btn-traditional text-lg py-3"
              >
                Đăng Nhập
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc đăng nhập với</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                  <span className="mr-2">📘</span>
                  Facebook
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                  <span className="mr-2">🔍</span>
                  Google
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Chưa có tài khoản?{' '}
                <Link
                  href="/signup"
                  className="text-red-600 hover:text-yellow-700 font-semibold"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 traditional-card p-6">
            <h3 className="font-display text-lg font-bold text-red-900 mb-4 text-center">
              Lợi Ích Thành Viên
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-yellow-600 mr-3">✓</span>
                <span className="text-sm text-gray-700">Giảm giá 10% cho tour đầu tiên</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 mr-3">✓</span>
                <span className="text-sm text-gray-700">Ưu tiên đặt tour trong mùa cao điểm</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 mr-3">✓</span>
                <span className="text-sm text-gray-700">Nhận thông báo tour mới và khuyến mãi</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 mr-3">✓</span>
                <span className="text-sm text-gray-700">Quản lý lịch sử đặt tour dễ dàng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}