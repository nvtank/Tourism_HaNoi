import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Đặt Tour & Thanh Toán",
      icon: "💳",
      faqs: [
        {
          question: "Làm thế nào để đặt tour?",
          answer: "Bạn có thể đặt tour trực tuyến qua website, gọi điện thoại đến hotline 024 3825 xxxx, hoặc đến trực tiếp văn phòng của chúng tôi tại 123 Phố Cổ, Hoàn Kiếm, Hà Nội."
        },
        {
          question: "Các hình thức thanh toán nào được chấp nhận?",
          answer: "Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng (Visa, Mastercard), và các ví điện tử như MoMo, ZaloPay."
        },
        {
          question: "Có cần đặt cọc trước không?",
          answer: "Có, bạn cần đặt cọc 30% tổng giá trị tour để giữ chỗ. Số tiền còn lại sẽ thanh toán trước ngày khởi hành 3 ngày."
        },
        {
          question: "Chính sách hủy tour như thế nào?",
          answer: "Hủy trước 7 ngày: hoàn 80% tiền cọc. Hủy trước 3 ngày: hoàn 50%. Hủy trong vòng 3 ngày: không hoàn tiền cọc."
        }
      ]
    },
    {
      title: "Lịch Trình & Dịch Vụ",
      icon: "📅",
      faqs: [
        {
          question: "Lịch trình tour có thể thay đổi không?",
          answer: "Lịch trình có thể điều chỉnh linh hoạt tùy theo thời tiết, tình hình giao thông và yêu cầu của khách hàng, nhưng vẫn đảm bảo các điểm tham quan chính."
        },
        {
          question: "Tour có bao gồm bữa ăn không?",
          answer: "Tùy vào từng tour, một số tour bao gồm bữa ăn, một số chỉ bao gồm bữa trưa. Thông tin chi tiết sẽ được ghi rõ trong mô tả tour."
        },
        {
          question: "Có hướng dẫn viên đi cùng không?",
          answer: "Có, tất cả tour đều có hướng dẫn viên chuyên nghiệp, am hiểu về lịch sử, văn hóa Hà Nội đi cùng suốt hành trình."
        },
        {
          question: "Phương tiện di chuyển là gì?",
          answer: "Tùy vào số lượng khách và loại tour: xe máy (tour cá nhân), xe ô tô 4-7 chỗ (nhóm nhỏ), xe bus (nhóm lớn)."
        }
      ]
    },
    {
      title: "Chuẩn Bị & Lưu Ý",
      icon: "🎒",
      faqs: [
        {
          question: "Cần chuẩn bị gì cho tour?",
          answer: "Mang theo giấy tờ tùy thân, mũ, kem chống nắng, nước uống, giày đi bộ thoải mái. Mặc trang phục lịch sự khi tham quan các di tích tôn giáo."
        },
        {
          question: "Tour có phù hợp với trẻ em không?",
          answer: "Có, hầu hết tour đều phù hợp với trẻ em. Trẻ em dưới 5 tuổi được miễn phí, từ 5-10 tuổi giảm 50% giá tour."
        },
        {
          question: "Thời tiết ảnh hưởng đến tour như thế nào?",
          answer: "Trong trường hợp thời tiết xấu, chúng tôi sẽ điều chỉnh lịch trình hoặc hoãn tour. Khách hàng sẽ được thông báo trước 24h."
        },
        {
          question: "Có bảo hiểm du lịch không?",
          answer: "Có, tất cả khách hàng đều được mua bảo hiểm du lịch với mức bồi thường tối đa 100 triệu đồng/người."
        }
      ]
    },
    {
      title: "Dịch Vụ Khác",
      icon: "🏨",
      faqs: [
        {
          question: "Có dịch vụ đưa đón tại khách sạn không?",
          answer: "Có, chúng tôi cung cấp dịch vụ đưa đón miễn phí tại các khách sạn trong khu vực nội thành Hà Nội."
        },
        {
          question: "Có thể đặt tour riêng cho nhóm không?",
          answer: "Có, chúng tôi nhận thiết kế tour riêng theo yêu cầu của khách hàng với lịch trình và dịch vụ tùy chỉnh."
        },
        {
          question: "Có hỗ trợ khách nước ngoài không?",
          answer: "Có, chúng tôi có hướng dẫn viên nói tiếng Anh, tiếng Pháp, tiếng Nhật và một số ngôn ngữ khác."
        },
        {
          question: "Làm sao để liên hệ trong trường hợp khẩn cấp?",
          answer: "Hotline khẩn cấp 24/7: 0987 654 321. Bạn cũng có thể liên hệ trực tiếp với hướng dẫn viên qua số điện thoại được cung cấp."
        }
      ]
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
            Câu Hỏi Thường Gặp
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ tour du lịch
          </p>
        </div>
      </section>

      {/* Search FAQ */}
      <section className="py-12 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="traditional-card p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-red-900 mb-4">
              Tìm Kiếm Câu Hỏi
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="w-full px-6 py-4 pr-12 border-2 border-yellow-200 rounded-full focus:border-red-500 focus:outline-none transition-colors duration-300 text-lg"
              />
              <button className="absolute right-2 top-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="traditional-card p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="font-display text-3xl font-bold text-red-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-white rounded-lg border-2 border-yellow-200 hover:border-red-500 transition-colors duration-300">
                        <h3 className="font-semibold text-red-900 text-lg">
                          {faq.question}
                        </h3>
                        <span className="text-red-600 text-xl group-open:rotate-180 transition-transform duration-300">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-red-600">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">💬</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Không Tìm Thấy Câu Trả Lời?
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Liên Hệ Hỗ Trợ
            </a>
            <a
              href="tel:024382xxxxx"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              📞 Gọi Hotline
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}