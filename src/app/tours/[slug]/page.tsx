import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface TourDetailPageProps {
  params: {
    slug: string;
  };
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = params;

  // Mock tour data - trong thực tế sẽ fetch từ database
  const tours: Record<string, any> = {
    'pho-co-ha-noi': {
      id: 1,
      title: "Tour Phố Cổ Hà Nội",
      description: "Khám phá 36 phố phường cổ kính với lịch sử hàng nghìn năm",
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "500.000 VNĐ",
      duration: "1 ngày",
      groupSize: "10-15 người",
      highlights: ["Đền Ngọc Sơn", "Hồ Hoàn Kiếm", "Chợ Đồng Xuân", "Phố Hàng Mã"],
      schedule: [
        "8:00 - Tập trung tại Hồ Hoàn Kiếm",
        "9:00 - Thăm Đền Ngọc Sơn",
        "11:00 - Dạo phố cổ",
        "12:00 - Ăn trưa",
        "14:00 - Chợ Đồng Xuân",
        "17:00 - Kết thúc tour"
      ],
      included: ["Hướng dẫn viên", "Vé tham quan", "Bữa trưa", "Nước uống"],
      notIncluded: ["Chi phí cá nhân", "Tip hướng dẫn viên"]
    },
    'van-mieu': {
      id: 2,
      title: "Tour Văn Miếu - Quốc Tử Giám",
      description: "Thăm trường đại học đầu tiên của Việt Nam",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "300.000 VNĐ",
      duration: "Nửa ngày",
      groupSize: "15-20 người",
      highlights: ["Văn Miếu", "Quốc Tử Giám", "Bia tiến sĩ", "Khuê Văn Các"],
      schedule: [
        "8:00 - Tập trung tại cổng Văn Miếu",
        "8:30 - Thăm quan Văn Miếu",
        "10:00 - Quốc Tử Giám",
        "11:30 - Kết thúc tour"
      ],
      included: ["Hướng dẫn viên", "Vé tham quan", "Nước uống"],
      notIncluded: ["Bữa ăn", "Chi phí cá nhân"]
    }
  };

  const tour = tours[slug];

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-amber-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-start mb-6">
                <div className="text-4xl text-yellow-400">❀</div>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white text-shadow mb-6">
                {tour.title}
              </h1>
              <p className="text-xl text-yellow-100 leading-relaxed mb-8">
                {tour.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
                  {tour.duration}
                </span>
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  {tour.groupSize}
                </span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-2xl">
                  {tour.price}
                </span>
              </div>
              <Link
                href="/booking"
                className="btn-traditional text-lg px-8 py-4 inline-block"
              >
                Đặt Tour Ngay
              </Link>
            </div>
            <div className="traditional-card overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <div className="traditional-card p-8">
                <h2 className="font-display text-3xl font-bold text-red-900 mb-6">
                  Điểm Nổi Bật
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <span className="text-yellow-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="traditional-card p-8">
                <h2 className="font-display text-3xl font-bold text-red-900 mb-6">
                  Lịch Trình Tour
                </h2>
                <div className="space-y-4">
                  {tour.schedule.map((item: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included/Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="traditional-card p-6">
                  <h3 className="font-display text-xl font-bold text-green-700 mb-4">
                    Bao Gồm
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="traditional-card p-6">
                  <h3 className="font-display text-xl font-bold text-red-700 mb-4">
                    Không Bao Gồm
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="traditional-card p-6 sticky top-4">
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Đặt Tour
                </h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-900">{tour.price}</div>
                  <div className="text-gray-600">/ người</div>
                </div>
                <Link
                  href="/booking"
                  className="w-full btn-traditional text-center block mb-4"
                >
                  Đặt Tour Ngay
                </Link>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Hoặc liên hệ:</p>
                  <p className="font-semibold text-red-900">024 3825 xxxx</p>
                </div>
              </div>

              {/* Tour Info */}
              <div className="traditional-card p-6">
                <h4 className="font-display text-lg font-bold text-red-900 mb-4">
                  Thông Tin Tour
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thời gian:</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nhóm:</span>
                    <span className="font-semibold">{tour.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Khởi hành:</span>
                    <span className="font-semibold">Hàng ngày</span>
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