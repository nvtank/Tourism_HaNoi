import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all possible blog slugs
export async function generateStaticParams() {
  const blogSlugs = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ];

  return blogSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;

  // Mock blog data
  const blogData: Record<string, any> = {
    '1': {
      id: 1,
      title: "Khám Phá Bí Mật Của 36 Phố Phường Hà Nội",
      content: `
        <p>Khu phố cổ Hà Nội với 36 phố phường nổi tiếng không chỉ là trung tâm thương mại sầm uất mà còn là nơi lưu giữ những giá trị văn hóa truyền thống quý báu của thủ đô nghìn năm tuổi.</p>

        <h2>Lịch Sử Hình Thành</h2>
        <p>Khu phố cổ Hà Nội được hình thành từ thế kỷ 15, khi vua Lê Thái Tổ dời đô về Thăng Long. Các nghề thủ công được tập trung theo từng phố, tạo nên đặc trưng "một phố một nghề" độc đáo.</p>

        <h2>Những Con Phố Đặc Sắc</h2>
        <p><strong>Phố Hàng Mã:</strong> Nổi tiếng với các sản phẩm giấy mã, đồ thờ cúng và đồ trang trí lễ hội. Đây là nơi lưu giữ những nét đẹp tâm linh của người Việt.</p>

        <p><strong>Phố Hàng Bạc:</strong> Từng là trung tâm chế tác và buôn bán bạc, vàng. Ngày nay vẫn còn nhiều cửa hàng kim hoàn truyền thống.</p>

        <p><strong>Phố Hàng Gai:</strong> Chuyên về lụa và thêu, nơi bảo tồn nghề dệt lụa truyền thống của Việt Nam.</p>

        <h2>Kiến Trúc Độc Đáo</h2>
        <p>Những ngôi nhà ống đặc trưng với mặt tiền hẹp, chiều sâu dài, mái ngói âm dương tạo nên một kiến trúc độc đáo. Mỗi ngôi nhà đều có câu chuyện riêng, phản ánh lối sống và văn hóa của người Hà Nội xưa.</p>

        <h2>Ẩm Thực Đường Phố</h2>
        <p>Phố cổ còn nổi tiếng với ẩm thực đường phố phong phú. Từ tô phở nóng hổi, bánh cuốn thanh đạm đến chả cá Lã Vọng thơm ngon, tất cả đều mang đậm hương vị Hà Nội.</p>

        <h2>Bảo Tồn và Phát Triển</h2>
        <p>Hiện nay, khu phố cổ đang được bảo tồn và phát triển bền vững, vừa giữ gìn những giá trị truyền thống, vừa thích ứng với nhu cầu du lịch hiện đại.</p>
      `,
      author: "Nguyễn Văn Minh",
      date: "15 Tháng 12, 2024",
      category: "Văn Hóa",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    '2': {
      id: 2,
      title: "Lịch Sử Hình Thành Văn Miếu - Quốc Tử Giám",
      content: `
        <p>Văn Miếu - Quốc Tử Giám là một trong những di tích lịch sử văn hóa quan trọng nhất của Việt Nam, được xây dựng từ năm 1070 dưới triều Lý Thánh Tông.</p>

        <h2>Lịch Sử Xây Dựng</h2>
        <p>Văn Miếu được xây dựng để thờ Khổng Tử và các bậc hiền tài. Đây là nơi đầu tiên ở Việt Nam thờ Khổng Tử, thể hiện sự tôn vinh đối với nho học.</p>

        <h2>Quốc Tử Giám - Trường Đại Học Đầu Tiên</h2>
        <p>Năm 1076, Quốc Tử Giám được thành lập bên trong Văn Miếu, trở thành trường đại học đầu tiên của Việt Nam, đào tạo con em hoàng gia và quý tộc.</p>

        <h2>Kiến Trúc Độc Đáo</h2>
        <p>Văn Miếu có kiến trúc theo lối chữ Công với 5 khuôn viên, thể hiện triết lý âm dương và ngũ hành trong văn hóa Việt Nam.</p>
      `,
      author: "Trần Thị Lan",
      date: "12 Tháng 12, 2024",
      category: "Lịch Sử",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
    // Add more blog posts as needed
  };

  const article = blogData[slug];

  if (!article) {
    notFound();
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Lịch Sử Hình Thành Văn Miếu - Quốc Tử Giám",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300",
      category: "Lịch Sử"
    },
    {
      id: 3,
      title: "Ẩm Thực Đường Phố Hà Nội: Hương Vị Khó Quên",
      image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=300",
      category: "Ẩm Thực"
    },
    {
      id: 4,
      title: "Nghệ Thuật Múa Rối Nước Thăng Long",
      image: "https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=300",
      category: "Nghệ Thuật"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-amber-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white text-shadow mb-6 text-center">
            {article.title}
          </h1>
          <div className="flex items-center justify-center text-yellow-100 space-x-4">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="traditional-card overflow-hidden mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="traditional-card p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none"
              style={{
                color: '#3E2723',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-display text-xl font-bold text-red-900 mb-4">
                Chia Sẻ Bài Viết
              </h4>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  📘 Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  🐦 Twitter
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                  📌 Pinterest
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Bài Viết Liên Quan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="traditional-card hover-lift group cursor-pointer">
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
                    <h3 className="font-display text-lg font-bold text-red-900 group-hover:text-yellow-700 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-traditional text-lg px-10 py-4">
              Xem Tất Cả Bài Viết
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}