import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nguyễn Văn Minh",
      position: "Giám Đốc Điều Hành",
      experience: "15 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Chuyên gia về du lịch văn hóa Việt Nam"
    },
    {
      name: "Trần Thị Lan",
      position: "Trưởng Phòng Tour",
      experience: "12 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Chuyên gia thiết kế hành trình du lịch"
    },
    {
      name: "Lê Văn Đức",
      position: "Hướng Dẫn Viên Trưởng",
      experience: "10 năm kinh nghiệm",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Thạc sĩ Lịch sử Việt Nam"
    }
  ];

  const achievements = [
    { number: "10+", label: "Năm Kinh Nghiệm" },
    { number: "5000+", label: "Khách Hàng Hài Lòng" },
    { number: "50+", label: "Tour Đa Dạng" },
    { number: "100%", label: "Cam Kết Chất Lượng" }
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
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Hành trình khám phá văn hóa Việt Nam cùng đội ngũ chuyên nghiệp
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl text-red-600 mb-6">❀</div>
              <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Được thành lập từ năm 2014, <strong className="text-red-800">Du Lịch Hà Nội</strong> ra đời từ tình yêu sâu sắc 
                  với văn hóa và lịch sử nghìn năm của thủ đô Thăng Long.
                </p>
                <p>
                  Chúng tôi tin rằng mỗi chuyến đi không chỉ là việc tham quan các địa danh, mà còn là hành trình 
                  khám phá tâm hồn, văn hóa và truyền thống của dân tộc Việt Nam.
                </p>
                <p>
                  Với đội ngũ hướng dẫn viên am hiểu sâu sắc về lịch sử, văn hóa và ẩm thực Hà Nội, chúng tôi 
                  cam kết mang đến những trải nghiệm chân thực và ý nghĩa nhất cho du khách.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="traditional-card p-8">
                <img
                  src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Văn Miếu Quốc Tử Giám"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="font-display text-xl font-bold text-red-900">Văn Miếu - Quốc Tử Giám</h3>
                  <p className="text-gray-600 mt-2">Biểu tượng của truyền thống hiếu học</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Sứ Mệnh & Tầm Nhìn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="traditional-card p-8 text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="font-display text-2xl font-bold text-red-900 mb-4">Sứ Mệnh</h3>
              <p className="text-gray-700 leading-relaxed">
                Bảo tồn và lan tỏa những giá trị văn hóa truyền thống Việt Nam thông qua các chuyến du lịch 
                có ý nghĩa, giúp du khách hiểu sâu hơn về lịch sử và văn hóa dân tộc.
              </p>
            </div>
            <div className="traditional-card p-8 text-center">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="font-display text-2xl font-bold text-red-900 mb-4">Tầm Nhìn</h3>
              <p className="text-gray-700 leading-relaxed">
                Trở thành công ty du lịch văn hóa hàng đầu Việt Nam, được khách hàng tin tưởng và lựa chọn 
                khi muốn khám phá vẻ đẹp truyền thống của đất nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-yellow-400 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Thành Tựu Của Chúng Tôi
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-white font-semibold">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-4xl text-red-600 mb-6">❀</div>
            <h2 className="font-display text-4xl font-bold text-red-900 mb-6">
              Đội Ngũ Chuyên Nghiệp
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Những con người tận tâm với sứ mệnh lan tỏa văn hóa Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="traditional-card hover-lift text-center p-8">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-yellow-400"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-700 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}