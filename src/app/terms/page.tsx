import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const sections = [
    {
      title: "1. Giới Thiệu Chung",
      content: [
        "Chào mừng bạn đến với website Du Lịch Hà Nội (dulichhanoi.vn). Bằng việc truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản và điều kiện được quy định dưới đây.",
        "Các điều khoản này có hiệu lực từ ngày 01/01/2024 và có thể được cập nhật mà không cần thông báo trước. Chúng tôi khuyến khích bạn thường xuyên kiểm tra trang này để cập nhật những thay đổi mới nhất."
      ]
    },
    {
      title: "2. Định Nghĩa",
      content: [
        "\"Công ty\": Công ty Du Lịch Hà Nội, địa chỉ tại 123 Phố Cổ, Quận Hoàn Kiếm, Hà Nội.",
        "\"Khách hàng\": Cá nhân hoặc tổ chức sử dụng dịch vụ của công ty.",
        "\"Dịch vụ\": Các tour du lịch, hướng dẫn viên và các dịch vụ liên quan được cung cấp bởi công ty.",
        "\"Website\": Trang web dulichhanoi.vn và tất cả các trang con liên quan."
      ]
    },
    {
      title: "3. Dịch Vụ Tour Du Lịch",
      content: [
        "Công ty cung cấp các dịch vụ tour du lịch văn hóa, lịch sử tại Hà Nội và các vùng lân cận.",
        "Tất cả thông tin về tour (giá cả, lịch trình, dịch vụ bao gồm) được cung cấp trên website chỉ mang tính chất tham khảo và có thể thay đổi tùy theo tình hình thực tế.",
        "Công ty có quyền thay đổi lịch trình tour trong trường hợp bất khả kháng như thời tiết xấu, thiên tai, hoặc các yếu tố khách quan khác.",
        "Khách hàng cần tuân thủ các quy định về an toàn và hướng dẫn của hướng dẫn viên trong suốt chuyến đi."
      ]
    },
    {
      title: "4. Đặt Tour và Thanh Toán",
      content: [
        "Khách hàng có thể đặt tour qua website, điện thoại hoặc trực tiếp tại văn phòng công ty.",
        "Để xác nhận đặt tour, khách hàng cần thanh toán tiền cọc tối thiểu 30% tổng giá trị tour.",
        "Số tiền còn lại phải được thanh toán đầy đủ trước ngày khởi hành ít nhất 3 ngày làm việc.",
        "Công ty chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng và các ví điện tử.",
        "Mọi giao dịch thanh toán đều được xuất hóa đơn VAT theo quy định của pháp luật."
      ]
    },
    {
      title: "5. Chính Sách Hủy Tour",
      content: [
        "Hủy tour trước 7 ngày làm việc: Hoàn lại 80% tiền cọc đã thanh toán.",
        "Hủy tour từ 3-7 ngày làm việc: Hoàn lại 50% tiền cọc đã thanh toán.",
        "Hủy tour trong vòng 3 ngày làm việc: Không hoàn lại tiền cọc.",
        "Trong trường hợp công ty hủy tour do lý do khách quan, khách hàng sẽ được hoàn lại 100% số tiền đã thanh toán hoặc chuyển sang tour khác có giá trị tương đương.",
        "Việc hoàn tiền sẽ được thực hiện trong vòng 7-10 ngày làm việc kể từ ngày xác nhận hủy tour."
      ]
    },
    {
      title: "6. Trách Nhiệm của Khách Hàng",
      content: [
        "Cung cấp thông tin chính xác và đầy đủ khi đăng ký tour.",
        "Có mặt đúng giờ tại địa điểm tập trung theo lịch trình đã thông báo.",
        "Tuân thủ các quy định về an toàn và hướng dẫn của hướng dẫn viên.",
        "Tôn trọng văn hóa, phong tục tập quán địa phương và các du khách khác.",
        "Bảo quản tài sản cá nhân và không gây thiệt hại đến tài sản của công ty hoặc bên thứ ba.",
        "Thông báo ngay cho hướng dẫn viên về bất kỳ vấn đề sức khỏe hoặc tình huống khẩn cấp nào."
      ]
    },
    {
      title: "7. Trách Nhiệm của Công Ty",
      content: [
        "Cung cấp dịch vụ tour theo đúng chương trình đã cam kết (trừ trường hợp bất khả kháng).",
        "Đảm bảo an toàn cho khách hàng trong suốt chuyến đi.",
        "Cung cấp hướng dẫn viên có chuyên môn và kinh nghiệm.",
        "Hỗ trợ khách hàng 24/7 trong trường hợp khẩn cấp.",
        "Bảo mật thông tin cá nhân của khách hàng theo quy định pháp luật.",
        "Giải quyết khiếu nại của khách hàng một cách nhanh chóng và công bằng."
      ]
    },
    {
      title: "8. Bảo Hiểm và Trách Nhiệm",
      content: [
        "Công ty mua bảo hiểm du lịch cho tất cả khách hàng tham gia tour với mức bồi thường tối đa 100 triệu đồng/người.",
        "Công ty không chịu trách nhiệm về thiệt hại do khách hàng vi phạm quy định an toàn hoặc hành vi cá nhân gây ra.",
        "Trong trường hợp xảy ra tai nạn hoặc sự cố, công ty sẽ hỗ trợ tối đa và phối hợp với cơ quan chức năng để giải quyết.",
        "Khách hàng có trách nhiệm khai báo tình trạng sức khỏe trước khi tham gia tour."
      ]
    },
    {
      title: "9. Quyền Sở Hữu Trí Tuệ",
      content: [
        "Tất cả nội dung trên website bao gồm văn bản, hình ảnh, logo, thiết kế đều thuộc quyền sở hữu của công ty.",
        "Khách hàng không được sao chép, phân phối hoặc sử dụng nội dung của website cho mục đích thương mại mà không có sự đồng ý bằng văn bản của công ty.",
        "Việc sử dụng thông tin từ website chỉ được phép cho mục đích cá nhân và phi thương mại."
      ]
    },
    {
      title: "10. Giải Quyết Tranh Chấp",
      content: [
        "Mọi tranh chấp phát sinh sẽ được giải quyết thông qua thương lượng, hòa giải.",
        "Trong trường hợp không thể giải quyết bằng thương lượng, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Hà Nội.",
        "Luật pháp Việt Nam sẽ được áp dụng để giải quyết mọi tranh chấp.",
        "Khách hàng có quyền khiếu nại lên cơ quan quản lý nhà nước về du lịch nếu cần thiết."
      ]
    },
    {
      title: "11. Điều Khoản Cuối",
      content: [
        "Các điều khoản này có thể được sửa đổi, bổ sung mà không cần thông báo trước.",
        "Nếu có bất kỳ điều khoản nào bị tòa án tuyên bố là không hợp lệ, các điều khoản còn lại vẫn có hiệu lực.",
        "Việc khách hàng tiếp tục sử dụng dịch vụ sau khi có thay đổi điều khoản được coi là đồng ý với các thay đổi đó.",
        "Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ: info@dulichhanoi.vn hoặc 024 3825 xxxx."
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
            Điều Khoản Sử Dụng
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Quy định và điều kiện sử dụng dịch vụ Du Lịch Hà Nội
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="traditional-card p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="text-4xl text-red-600 mb-6">📋</div>
              <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                Điều Khoản và Điều Kiện
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng dịch vụ của chúng tôi.
                Việc sử dụng dịch vụ đồng nghĩa với việc bạn đã đồng ý với tất cả các điều khoản này.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                  Thông Tin Liên Hệ
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Công ty:</strong> Du Lịch Hà Nội</p>
                  <p><strong>Địa chỉ:</strong> 123 Phố Cổ, Quận Hoàn Kiếm, Hà Nội</p>
                  <p><strong>Điện thoại:</strong> 024 3825 xxxx</p>
                  <p><strong>Email:</strong> info@dulichhanoi.vn</p>
                  <p><strong>Website:</strong> dulichhanoi.vn</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Điều khoản này có hiệu lực từ ngày 01/01/2024</p>
              <p>Cập nhật lần cuối: 15/12/2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-red-900 mb-4">
              Tài Liệu Liên Quan
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/privacy"
              className="traditional-card p-6 hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h4 className="font-display text-lg font-bold text-red-900 mb-2">
                Chính Sách Bảo Mật
              </h4>
              <p className="text-gray-700">
                Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn
              </p>
            </a>
            <a
              href="/contact"
              className="traditional-card p-6 hover-lift text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</div>
              <h4 className="font-display text-lg font-bold text-red-900 mb-2">
                Liên Hệ Hỗ Trợ
              </h4>
              <p className="text-gray-700">
                Cần hỗ trợ? Liên hệ với đội ngũ chăm sóc khách hàng
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}