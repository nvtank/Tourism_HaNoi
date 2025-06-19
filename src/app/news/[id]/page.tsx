import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all possible news IDs
export async function generateStaticParams() {
  const newsIds = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ];

  return newsIds.map((id) => ({
    id: id,
  }));
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = params;

  // Mock news data
  const newsData: Record<string, any> = {
    '1': {
      id: 1,
      title: "Du Lịch Hà Nội Nhận Giải Thưởng 'Công Ty Du Lịch Xuất Sắc 2024'",
      content: `
        <p>Công ty Du Lịch Hà Nội vinh dự nhận giải thưởng danh giá từ Hiệp hội Du lịch Việt Nam, ghi nhận những đóng góp tích cực cho ngành du lịch trong năm qua.</p>
        
        <h2>Thành tựu đáng tự hào</h2>
        <p>Trong năm 2024, Du Lịch Hà Nội đã phục vụ hơn 10,000 lượt khách du lịch với tỷ lệ hài lòng đạt 98%. Công ty đã không ngừng nâng cao chất lượng dịch vụ và mở rộng các sản phẩm tour độc đáo.</p>
        
        <h2>Cam kết phát triển bền vững</h2>
        <p>Giải thưởng này không chỉ là sự ghi nhận cho những nỗ lực trong quá khứ mà còn là động lực để chúng tôi tiếp tục phát triển du lịch bền vững, bảo tồn văn hóa truyền thống.</p>
      `,
      author: "Ban Biên Tập",
      date: "20 Tháng 12, 2024",
      category: "Tin Công Ty",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    '2': {
      id: 2,
      title: "Khuyến Mãi Đặc Biệt Mừng Năm Mới 2025",
      content: `
        <p>Nhân dịp năm mới 2025, Du Lịch Hà Nội triển khai chương trình khuyến mãi đặc biệt với mức giảm giá lên đến 30% cho tất cả các tour.</p>
        
        <h2>Chi tiết chương trình</h2>
        <p>Chương trình áp dụng từ ngày 1/1/2025 đến 31/1/2025 cho tất cả các tour du lịch Hà Nội. Khách hàng đặt tour trong thời gian này sẽ được hưởng ưu đãi đặc biệt.</p>
        
        <h2>Điều kiện áp dụng</h2>
        <p>Ưu đãi áp dụng cho nhóm từ 4 người trở lên. Không áp dụng đồng thời với các chương trình khuyến mãi khác.</p>
      `,
      author: "Phòng Marketing",
      date: "18 Tháng 12, 2024",
      category: "Khuyến Mãi",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
    // Add more news as needed
  };

  const article = newsData[id];

  if (!article) {
    notFound();
  }

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
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}