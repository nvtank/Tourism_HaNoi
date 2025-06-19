import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Hướng Dẫn Viên Du Lịch",
      department: "Phòng Hướng Dẫn",
      location: "Hà Nội",
      type: "Toàn thời gian",
      experience: "1-3 năm",
      salary: "8-15 triệu VNĐ",
      description: "Tìm kiếm hướng dẫn viên nhiệt tình, am hiểu về lịch sử và văn hóa Hà Nội.",
      requirements: [
        "Tốt nghiệp Đại học chuyên ngành Du lịch, Lịch sử hoặc liên quan",
        "Có kinh nghiệm hướng dẫn du lịch tối thiểu 1 năm",
        "Giao tiếp tiếng Anh tốt, ưu tiên biết thêm ngôn ngữ khác",
        "Kiến thức sâu về lịch sử, văn hóa Hà Nội",
        "Kỹ năng thuyết trình và giao tiếp tốt"
      ],
      benefits: [
        "Lương cơ bản + thưởng theo doanh số",
        "Bảo hiểm xã hội đầy đủ",
        "Đào tạo chuyên môn định kỳ",
        "Du lịch công ty hàng năm",
        "Môi trường làm việc thân thiện"
      ]
    },
    {
      title: "Chuyên Viên Thiết Kế Tour",
      department: "Phòng Tour",
      location: "Hà Nội",
      type: "Toàn thời gian",
      experience: "2-5 năm",
      salary: "10-18 triệu VNĐ",
      description: "Thiết kế và phát triển các sản phẩm tour du lịch sáng tạo và hấp dẫn.",
      requirements: [
        "Tốt nghiệp Đại học chuyên ngành Du lịch, Marketing hoặc liên quan",
        "Có kinh nghiệm thiết kế tour tối thiểu 2 năm",
        "Hiểu biết sâu về thị trường du lịch Việt Nam",
        "Kỹ năng nghiên cứu thị trường và phân tích dữ liệu",
        "Sáng tạo và có tư duy đổi mới"
      ],
      benefits: [
        "Lương cạnh tranh theo năng lực",
        "Thưởng hiệu suất cao",
        "Cơ hội phát triển nghề nghiệp",
        "Tham gia các chuyến khảo sát tour",
        "Đào tạo nâng cao kỹ năng"
      ]
    },
    {
      title: "Chuyên Viên Marketing Digital",
      department: "Phòng Marketing",
      location: "Hà Nội",
      type: "Toàn thời gian",
      experience: "1-3 năm",
      salary: "9-16 triệu VNĐ",
      description: "Phát triển và thực hiện các chiến lược marketing online cho công ty.",
      requirements: [
        "Tốt nghiệp Đại học chuyên ngành Marketing, Truyền thông hoặc liên quan",
        "Có kinh nghiệm về Digital Marketing, SEO, SEM",
        "Thành thạo các công cụ marketing: Google Ads, Facebook Ads, Analytics",
        "Kỹ năng viết content và thiết kế cơ bản",
        "Hiểu biết về ngành du lịch là một lợi thế"
      ],
      benefits: [
        "Lương thỏa thuận theo kinh nghiệm",
        "Thưởng KPI hàng tháng",
        "Học hỏi từ các chuyên gia marketing",
        "Môi trường sáng tạo và năng động",
        "Cơ hội thăng tiến nhanh"
      ]
    },
    {
      title: "Nhân Viên Chăm Sóc Khách Hàng",
      department: "Phòng Dịch Vụ Khách Hàng",
      location: "Hà Nội",
      type: "Toàn thời gian",
      experience: "0-2 năm",
      salary: "7-12 triệu VNĐ",
      description: "Hỗ trợ và chăm sóc khách hàng, giải đáp thắc mắc về dịch vụ tour.",
      requirements: [
        "Tốt nghiệp Trung cấp trở lên",
        "Kỹ năng giao tiếp tốt, giọng nói rõ ràng",
        "Kiên nhẫn, nhiệt tình trong công việc",
        "Có khả năng làm việc theo ca",
        "Ưu tiên có kinh nghiệm customer service"
      ],
      benefits: [
        "Lương cơ bản + phụ cấp ca",
        "Đào tạo kỹ năng chăm sóc khách hàng",
        "Môi trường làm việc chuyên nghiệp",
        "Cơ hội học hỏi về ngành du lịch",
        "Chế độ phúc lợi đầy đủ"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Lương Thưởng Hấp Dẫn",
      description: "Mức lương cạnh tranh với thưởng hiệu suất và các khoản phụ cấp"
    },
    {
      icon: "🏥",
      title: "Bảo Hiểm Toàn Diện",
      description: "Bảo hiểm xã hội, y tế và bảo hiểm tai nạn 24/7"
    },
    {
      icon: "📚",
      title: "Đào Tạo Phát Triển",
      description: "Chương trình đào tạo chuyên môn và kỹ năng mềm định kỳ"
    },
    {
      icon: "🌴",
      title: "Du Lịch Công Ty",
      description: "Chuyến du lịch team building và nghỉ dưỡng hàng năm"
    },
    {
      icon: "⏰",
      title: "Thời Gian Linh Hoạt",
      description: "Giờ làm việc linh hoạt và chế độ work-life balance"
    },
    {
      icon: "🚀",
      title: "Cơ Hội Thăng Tiến",
      description: "Lộ trình phát triển nghề nghiệp rõ ràng và cơ hội thăng tiến"
    }
  ];

  const workCulture = [
    {
      title: "Môi Trường Sáng Tạo",
      description: "Khuyến khích đổi mới và sáng tạo trong công việc",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Đội Ngũ Đoàn Kết",
      description: "Tinh thần teamwork và hỗ trợ lẫn nhau",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Học Hỏi Liên Tục",
      description: "Văn hóa học hỏi và phát triển bản thân",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
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
            Tuyển Dụng
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Gia nhập đội ngũ chuyên nghiệp và cùng phát triển ngành du lịch Việt Nam
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Những lý do để bạn gia nhập đại gia đình Du Lịch Hà Nội
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Vị Trí Đang Tuyển
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Khám phá các cơ hội nghề nghiệp hấp dẫn tại Du Lịch Hà Nội
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="traditional-card p-8 hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Job Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="font-display text-2xl font-bold text-red-900">
                        {job.title}
                      </h3>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-semibold text-red-800">Phòng ban:</span>
                        <p className="text-gray-700">{job.department}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Địa điểm:</span>
                        <p className="text-gray-700">{job.location}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Kinh nghiệm:</span>
                        <p className="text-gray-700">{job.experience}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-red-800">Mức lương:</span>
                        <p className="text-gray-700">{job.salary}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3">Yêu cầu:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-gray-700">
                              <span className="text-yellow-600 mr-2 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3">Quyền lợi:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                              <span className="text-green-600 mr-2 mt-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <div className="text-center">
                      <button className="btn-traditional w-full mb-4">
                        Ứng Tuyển Ngay
                      </button>
                      <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full">
                        Lưu Tin Tuyển Dụng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Văn Hóa Công Ty
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Môi trường làm việc năng động và thân thiện
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workCulture.map((culture, index) => (
              <div key={index} className="traditional-card hover-lift overflow-hidden">
                <img
                  src={culture.image}
                  alt={culture.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-red-900 mb-3">
                    {culture.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {culture.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl text-yellow-400 mb-6">📝</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Quy Trình Ứng Tuyển
            </h2>
            <p className="text-yellow-100 text-lg">
              4 bước đơn giản để gia nhập đội ngũ của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Nộp Hồ Sơ", desc: "Gửi CV và thư xin việc" },
              { step: "2", title: "Sàng Lọc", desc: "Đánh giá hồ sơ ứng viên" },
              { step: "3", title: "Phỏng Vấn", desc: "Phỏng vấn trực tiếp hoặc online" },
              { step: "4", title: "Nhận Việc", desc: "Thông báo kết quả và onboarding" }
            ].map((process, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-yellow-100">{process.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:hr@dulichhanoi.vn"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Gửi CV Ngay: hr@dulichhanoi.vn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}