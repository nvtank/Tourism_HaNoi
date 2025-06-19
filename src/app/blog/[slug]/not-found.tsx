import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="traditional-card p-12">
            <div className="text-6xl mb-6">📝</div>
            <h1 className="font-display text-4xl font-bold text-red-900 mb-4">
              Blog Không Tìm Thấy
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Xin lỗi, bài blog bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="btn-traditional"
              >
                Xem Tất Cả Blog
              </Link>
              <Link
                href="/"
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Về Trang Chủ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}