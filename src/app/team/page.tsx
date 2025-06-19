import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Nguyễn Văn Minh",
      position: "Giám Đốc Điều Hành",
      experience: "15 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Chuyên gia về du lịch văn hóa Việt Nam với hơn 15 năm kinh nghiệm trong ngành.",
      specialties: ["Quản lý tour", "Phát triển sản phẩm", "Quan hệ đối tác"],
      email: "minh@dulichhanoi.vn",
      phone: "024 3825 0001"
    },
    {
      name: "Trần Thị Lan",
      position: "Trưởng Phòng Tour",
      experience: "12 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Chuyên gia thiết kế hành trình du lịch với kinh nghiệm phong phú.",
      specialties: ["Thiết kế tour", "Tư vấn khách hàng", "Quản lý chất lượng"],
      email: "lan@dulichhanoi.vn",
      phone: "024 3825 0002"
    },
    {
      name: "Lê Văn Đức",
      position: "Hướng Dẫn Viên Trưởng",
      experience: "10 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Thạc sĩ Lịch sử Việt Nam, chuyên về văn hóa và lịch sử Hà Nội.",
      specialties: ["Lịch sử Hà Nội", "Văn hóa truyền thống", "Đào tạo HDV"],
      email: "duc@dulichhanoi.vn",
      phone: "024 3825 0003"
    },
    {
      name: "Phạm Thị Mai",
      position: "Trưởng Phòng Marketing",
      experience: "8 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Chuyên gia marketing du lịch với nhiều chiến dịch thành công.",
      specialties: ["Digital Marketing", "Truyền thông", "Phát triển thương hiệu"],
      email: "mai@dulichhanoi.vn",
      phone: "024 3825 0004"
    },
    {
      name: "Hoàng Văn Nam",
      position: "Trưởng Phòng Kỹ Thuật",
      experience: "7 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Chuyên gia công nghệ thông tin, phát triển hệ thống đặt tour online.",
      specialties: ["Phát triển web", "Hệ thống đặt tour", "Bảo mật thông tin"],
      email: "nam@dulichhanoi.vn",
      phone: "024 3825 0005"
    },
    {
      name: "Nguyễn Thị Hoa",
      position: "Trưởng Phòng Tài Chính",
      experience: "9 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Chuyên gia tài chính với bằng CPA, quản lý tài chính công ty hiệu quả.",
      specialties: ["Quản lý tài chính", "Kế toán", "Phân tích kinh doanh"],
      email: "hoa@dulichhanoi.vn",
      phone: "024 3825 0006"
    }
  ];

  const departments = [
    {
      name: "Phòng Tour",
      description: "Thiết kế và quản lý các chương trình tour du lịch",
      icon: "🗺️",
      members: 8
    },
    {
      name: "Phòng Hướng Dẫn",
      description: "Đội ngũ hướng dẫn viên chuyên nghiệp",
      icon: "👥",
      members: 15
    },
    {
      name: "Phòng Marketing",
      description: "Truyền thông và phát triển thương hiệu",
      icon: "📢",
      members: 5
    },
    {
      name: "Phòng Kỹ Thuật",
      description: "Phát triển và duy trì hệ thống công nghệ",
      icon: "💻",
      members: 4
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
            Đội Ngũ Chuyên Nghiệp
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Những con người tận tâm với sứ mệnh lan tỏa văn hóa Việt Nam
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Ban Lãnh Đạo
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Đội ngũ lãnh đạo giàu kinh nghiệm và tâm huyết với ngành du lịch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8 group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-yellow-400 group-hover:border-red-500 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-red-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-yellow-700 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{member.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">Chuyên môn:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, sIndex) => (
                      <span key={sIndex} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-1">📧</span>
                      {member.email}
                    </div>
                  </div>
                  <div className="flex justify-center mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-1">📞</span>
                      {member.phone}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Các Phòng Ban
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tổ chức hoạt động chuyên nghiệp với các phòng ban chuyên biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {dept.description}
                </p>
                <div className="bg-yellow-100 rounded-full px-4 py-2 inline-block">
                  <span className="text-yellow-800 font-semibold">{dept.members} thành viên</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-yellow-400 mb-6">🤝</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Gia Nhập Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Chúng tôi luôn tìm kiếm những tài năng mới để cùng phát triển ngành du lịch Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Xem Vị Trí Tuyển Dụng
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Liên Hệ HR
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}