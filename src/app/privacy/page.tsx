import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Thông Tin Chúng Tôi Thu Thập",
      content: [
        "Thông tin cá nhân: Họ tên, ngày sinh, giới tính, số điện thoại, địa chỉ email, địa chỉ thường trú.",
        "Thông tin thanh toán: Thông tin thẻ tín dụng, tài khoản ngân hàng (được mã hóa và bảo mật).",
        "Thông tin sử dụng website: Địa chỉ IP, loại trình duyệt, thời gian truy cập, các trang đã xem.",
        "Thông tin từ mạng xã hội: Khi bạn đăng nhập bằng tài khoản Facebook, Google.",
        "Thông tin khác: Sở thích du lịch, yêu cầu đặc biệt, phản hồi và đánh giá."
      ]
    },
    {
      title: "2. Mục Đích Sử Dụng Thông Tin",
      content: [
        "Xử lý đặt tour và cung cấp dịch vụ du lịch theo yêu cầu của khách hàng.",
        "Liên hệ xác nhận thông tin đặt tour, thay đổi lịch trình hoặc thông báo khẩn cấp.",
        "Gửi thông tin khuyến mãi, tour mới và các ưu đãi đặc biệt (nếu khách hàng đồng ý).",
        "Cải thiện chất lượng dịch vụ và trải nghiệm người dùng trên website.",
        "Phân tích hành vi người dùng để tối ưu hóa nội dung và dịch vụ.",
        "Tuân thủ các yêu cầu pháp lý và giải quyết tranh chấp nếu có."
      ]
    },
    {
      title: "3. Chia Sẻ Thông Tin",
      content: [
        "Chúng tôi cam kết không bán, cho thuê hoặc trao đổi thông tin cá nhân của khách hàng với bên thứ ba vì mục đích thương mại.",
        "Thông tin có thể được chia sẻ với:",
        "- Đối tác cung cấp dịch vụ (khách sạn, nhà hàng, phương tiện vận chuyển) để thực hiện tour.",
        "- Công ty bảo hiểm trong trường hợp cần thiết cho việc bồi thường.",
        "- Cơ quan pháp luật khi có yêu cầu chính thức theo quy định của pháp luật.",
        "- Nhà cung cấp dịch vụ kỹ thuật để duy trì và cải thiện website (với cam kết bảo mật)."
      ]
    },
    {
      title: "4. Bảo Mật Thông Tin",
      content: [
        "Sử dụng công nghệ mã hóa SSL 256-bit để bảo vệ thông tin trong quá trình truyền tải.",
        "Lưu trữ dữ liệu trên server có hệ thống bảo mật cao với tường lửa và giám sát 24/7.",
        "Chỉ nhân viên được ủy quyền mới có thể truy cập thông tin khách hàng.",
        "Thường xuyên cập nhật và vá lỗi bảo mật cho hệ thống.",
        "Sao lưu dữ liệu định kỳ để đảm bảo an toàn thông tin.",
        "Đào tạo nhân viên về quy định bảo mật và xử lý thông tin cá nhân."
      ]
    },
    {
      title: "5. Cookies và Công Nghệ Theo Dõi",
      content: [
        "Website sử dụng cookies để cải thiện trải nghiệm người dùng và phân tích lưu lượng truy cập.",
        "Các loại cookies được sử dụng:",
        "- Cookies cần thiết: Đảm bảo website hoạt động bình thường.",
        "- Cookies phân tích: Thu thập thông tin về cách sử dụng website.",
        "- Cookies marketing: Hiển thị quảng cáo phù hợp với sở thích người dùng.",
        "Bạn có thể tắt cookies trong cài đặt trình duyệt, nhưng điều này có thể ảnh hưởng đến trải nghiệm sử dụng website."
      ]
    },
    {
      title: "6. Quyền của Khách Hàng",
      content: [
        "Quyền truy cập: Yêu cầu xem thông tin cá nhân mà chúng tôi đang lưu trữ.",
        "Quyền chỉnh sửa: Cập nhật hoặc sửa đổi thông tin cá nhân không chính xác.",
        "Quyền xóa: Yêu cầu xóa thông tin cá nhân (trừ trường hợp pháp luật yêu cầu lưu trữ).",
        "Quyền hạn chế: Yêu cầu hạn chế việc xử lý thông tin cá nhân.",
        "Quyền phản đối: Từ chối việc sử dụng thông tin cho mục đích marketing.",
        "Quyền chuyển dữ liệu: Yêu cầu chuyển thông tin sang nhà cung cấp dịch vụ khác."
      ]
    },
    {
      title: "7. Lưu Trữ Thông Tin",
      content: [
        "Thông tin cá nhân sẽ được lưu trữ trong thời gian cần thiết để thực hiện mục đích đã nêu.",
        "Thông tin đặt tour: Lưu trữ tối thiểu 5 năm để phục vụ việc bảo hành dịch vụ và giải quyết khiếu nại.",
        "Thông tin tài khoản: Lưu trữ cho đến khi khách hàng yêu cầu xóa tài khoản.",
        "Thông tin thanh toán: Không lưu trữ thông tin thẻ tín dụng đầy đủ, chỉ lưu mã giao dịch.",
        "Sau thời gian lưu trữ, thông tin sẽ được xóa hoặc ẩn danh hóa một cách an toàn."
      ]
    },
    {
      title: "8. Chuyển Giao Thông Tin Quốc Tế",
      content: [
        "Trong một số trường hợp, thông tin có thể được chuyển đến các quốc gia khác để xử lý.",
        "Chúng tôi đảm bảo rằng việc chuyển giao này tuân thủ các quy định về bảo vệ dữ liệu.",
        "Các đối tác quốc tế phải cam kết bảo mật thông tin theo tiêu chuẩn tương đương.",
        "Khách hàng sẽ được thông báo trước khi có bất kỳ chuyển giao thông tin nào ra nước ngoài."
      ]
    },
    {
      title: "9. Bảo Vệ Trẻ Em",
      content: [
        "Website không thu thập thông tin cá nhân của trẻ em dưới 13 tuổi mà không có sự đồng ý của phụ huynh.",
        "Nếu phát hiện việc thu thập thông tin trẻ em không đúng quy định, chúng tôi sẽ xóa ngay lập tức.",
        "Phụ huynh có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin của con em mình.",
        "Khuyến khích phụ huynh giám sát hoạt động trực tuyến của trẻ em."
      ]
    },
    {
      title: "10. Thay Đổi Chính Sách",
      content: [
        "Chính sách bảo mật này có thể được cập nhật định kỳ để phản ánh các thay đổi trong hoạt động kinh doanh hoặc yêu cầu pháp lý.",
        "Mọi thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo trên website.",
        "Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi được coi là đồng ý với chính sách mới.",
        "Khách hàng có quyền ngừng sử dụng dịch vụ nếu không đồng ý với các thay đổi."
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
            Chính Sách Bảo Mật
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Cam kết bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="traditional-card p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="text-4xl text-red-600 mb-6">🔒</div>
              <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                Chính Sách Bảo Mật Thông Tin
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Du Lịch Hà Nội cam kết bảo vệ thông tin cá nhân của khách hàng. 
                Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact for Privacy */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                  Liên Hệ Về Vấn Đề Bảo Mật
                </h4>
                <p className="text-gray-700 mb-4">
                  Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật hoặc muốn thực hiện quyền của mình, 
                  vui lòng liên hệ với chúng tôi:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@dulichhanoi.vn</p>
                  <p><strong>Điện thoại:</strong> 024 3825 xxxx</p>
                  <p><strong>Địa chỉ:</strong> 123 Phố Cổ, Quận Hoàn Kiếm, Hà Nội</p>
                  <p><strong>Thời gian xử lý:</strong> Trong vòng 30 ngày làm việc</p>
                </div>
              </div>
            </div>

            {/* Data Protection Officer */}
            <div className="mt-8">
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                  Cán Bộ Bảo Vệ Dữ Liệu
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Họ tên:</strong> Nguyễn Thị Lan</p>
                  <p><strong>Chức vụ:</strong> Trưởng phòng IT & Bảo mật</p>
                  <p><strong>Email:</strong> dpo@dulichhanoi.vn</p>
                  <p><strong>Điện thoại:</strong> 024 3825 xxxx (nhánh 102)</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Chính sách này có hiệu lực từ ngày 01/01/2024</p>
              <p>Cập nhật lần cuối: 15/12/2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Tools */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-red-900 mb-4">
              Công Cụ Bảo Mật
            </h3>
            <p className="text-gray-700">
              Quản lý thông tin cá nhân và quyền riêng tư của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="traditional-card p-6 text-center hover-lift">
              <div className="text-4xl mb-4">👤</div>
              <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                Quản Lý Tài Khoản
              </h4>
              <p className="text-gray-700 mb-4">
                Xem và chỉnh sửa thông tin cá nhân của bạn
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                Truy Cập
              </button>
            </div>
            
            <div className="traditional-card p-6 text-center hover-lift">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                Cài Đặt Email
              </h4>
              <p className="text-gray-700 mb-4">
                Quản lý các loại email bạn muốn nhận
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                Cài Đặt
              </button>
            </div>
            
            <div className="traditional-card p-6 text-center hover-lift">
              <div className="text-4xl mb-4">🗑️</div>
              <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                Xóa Dữ Liệu
              </h4>
              <p className="text-gray-700 mb-4">
                Yêu cầu xóa hoàn toàn thông tin cá nhân
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                Yêu Cầu
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}