import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Khám Phá Bí Mật Của 36 Phố Phường Hà Nội",
    excerpt: "Mỗi con phố trong khu phố cổ Hà Nội đều mang trong mình một câu chuyện lịch sử độc đáo và những nét văn hóa truyền thống đặc sắc...",
    image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nguyễn Văn Minh",
    date: "15 Tháng 12, 2024",
    category: "Văn Hóa",
    readTime: "8 phút đọc"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Lịch Sử Hình Thành Văn Miếu - Quốc Tử Giám",
      excerpt: "Tìm hiểu về lịch sử hình thành và phát triển của ngôi trường đại học đầu tiên của Việt Nam...",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Trần Thị Lan",
      date: "12 Tháng 12, 2024",
      category: "Lịch Sử",
      readTime: "6 phút đọc"
    },
    {
      id: 3,
      title: "Ẩm Thực Đường Phố Hà Nội: Hương Vị Khó Quên",
      excerpt: "Từ tô phở nóng hổi đến bánh mì giòn rụm, khám phá tinh hoa ẩm thực đường phố thủ đô...",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Lê Văn Đức",
      date: "10 Tháng 12, 2024",
      category: "Ẩm Thực",
      readTime: "5 phút đọc"
    },
    {
      id: 4,
      title: "Nghệ Thuật Múa Rối Nước Thăng Long",
      excerpt: "Khám phá nghệ thuật múa rối nước truyền thống với lịch sử hàng nghìn năm của Việt Nam...",
      image: "https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Phạm Thị Mai",
      date: "8 Tháng 12, 2024",
      category: "Nghệ Thuật",
      readTime: "7 phút đọc"
    },
    {
      id: 5,
      title: "Làng Nghề Truyền Thống Xung Quanh Hà Nội",
      excerpt: "Tham quan các làng nghề nổi tiếng như Bát Tràng, Vạn Phúc, khám phá nghề thủ công truyền thống...",
      image: "https://images.pexels.com/photos/5207264/pexels-photo-5207264.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Hoàng Văn Nam",
      date: "5 Tháng 12, 2024",
      category: "Văn Hóa",
      readTime: "9 phút đọc"
    },
    {
      id: 6,
      title: "Kiến Trúc Cổ Kính Của Các Ngôi Chùa Hà Nội",
      excerpt: "Chiêm ngưỡng vẻ đẹp kiến trúc độc đáo của các ngôi chùa cổ trong lòng thủ đô...",
      image: "https://images.pexels.com/photos/2412600/pexels-photo-2412600.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Nguyễn Thị Hoa",
      date: "3 Tháng 12, 2024",
      category: "Kiến Trúc",
      readTime: "6 phút đọc"
    },
    {
      id: 7,
      title: "Lễ Hội Truyền Thống Của Người Hà Nội",
      excerpt: "Tìm hiểu về các lễ hội truyền thống đặc sắc diễn ra quanh năm tại Hà Nội...",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Vũ Thị Linh",
      date: "1 Tháng 12, 2024",
      category: "Lễ Hội",
      readTime: "8 phút đọc"
    }
  ];

  const categories = ["Tất Cả", "Văn Hóa", "Lịch Sử", "Ẩm Thực", "Nghệ Thuật", "Kiến Trúc", "Lễ Hội"];

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
            Tin Tức & Blog
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Khám phá những câu chuyện thú vị về văn hóa, lịch sử và du lịch Hà Nội
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Bài Viết Nổi Bật
            </h2>
          </div>

          <div className="traditional-card hover-lift overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-red-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="btn-traditional inline-block"
                >
                  Đọc Tiếp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="traditional-card hover-lift group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-red-900 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
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
              Xem Thêm Bài Viết
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">📧</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Đăng Ký Nhận Tin Tức
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Nhận những bài viết mới nhất về văn hóa và du lịch Hà Nội
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-full border-2 border-yellow-400 focus:outline-none focus:border-white"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Đăng Ký
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}