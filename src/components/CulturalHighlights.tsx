export default function CulturalHighlights() {
  const highlights = [
    {
      title: "Di Sản Văn Hóa",
      description: "Khám phá những di tích lịch sử được UNESCO công nhận",
      icon: "🏛️",
      features: ["Văn Miếu", "Hoàng Thành Thăng Long", "Phố Cổ Hà Nội"]
    },
    {
      title: "Ẩm Thực Truyền Thống",
      description: "Thưởng thức tinh hoa ẩm thực Bắc Bộ",
      icon: "🍜",
      features: ["Phở Hà Nội", "Bún Chả", "Chả Cá Lã Vọng"]
    },
    {
      title: "Nghệ Thuật Dân Gian",
      description: "Trải nghiệm các loại hình nghệ thuật truyền thống",
      icon: "🎭",
      features: ["Múa rối nước", "Ca trù", "Quan họ Bắc Ninh"]
    },
    {
      title: "Kiến Trúc Cổ Kính",
      description: "Chiêm ngưỡng vẻ đẹp kiến trúc Việt Nam xưa",
      icon: "🏯",
      features: ["Đình làng", "Chùa cổ", "Nhà ống phố cổ"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-4xl text-red-600">❀</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Tinh Hoa Văn Hóa
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hà Nội - nơi hội tụ những giá trị văn hóa truyền thống quý báu của dân tộc Việt Nam
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="traditional-card hover-lift h-full p-8 text-center">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-red-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <span className="text-yellow-600 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Decorative border */}
                <div className="mt-6 pt-6 border-t border-yellow-200">
                  <div className="text-yellow-600 text-xl">❀</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-20"></div>
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Trải Nghiệm Văn Hóa Hà Nội
              </h3>
              <p className="text-xl mb-8 text-yellow-100">
                Đặt tour ngay hôm nay để khám phá những giá trị văn hóa độc đáo của thủ đô
              </p>
              <button className="btn-traditional text-lg px-10 py-4 bg-yellow-600 hover:bg-yellow-700">
                Liên Hệ Tư Vấn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}