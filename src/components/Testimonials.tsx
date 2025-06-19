export default function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Thị Mai",
      location: "TP. Hồ Chí Minh",
      content: "Chuyến đi Hà Nội thật tuyệt vời! Tôi đã được khám phá những nét đẹp văn hóa truyền thống và thưởng thức những món ăn ngon tuyệt. Hướng dẫn viên rất nhiệt tình và am hiểu.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Trần Văn Hùng",
      location: "Đà Nẵng",
      content: "Lần đầu tiên đến Hà Nội, tôi đã bị ấn tượng bởi vẻ đẹp cổ kính của phố cổ. Mỗi con phố đều có câu chuyện riêng. Dịch vụ tour rất chuyên nghiệp.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lê Thị Hương",
      location: "Cần Thơ",
      content: "Văn Miếu và Quốc Tử Giám thật trang nghiêm và linh thiêng. Tôi cảm nhận được sự tôn kính đối với tri thức của tổ tiên. Một trải nghiệm không thể quên!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="text-4xl text-yellow-600">❀</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Cảm Nhận Khách Hàng
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Những chia sẻ chân thành từ du khách đã trải nghiệm tour du lịch Hà Nội cùng chúng tôi
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="traditional-card hover-lift p-8 relative">
              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-4xl text-yellow-600 opacity-50">"</div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.content}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-yellow-400"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-red-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-4 right-4 text-4xl text-yellow-600 opacity-50 rotate-180">"</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <h3 className="font-display text-2xl font-bold text-red-900 mb-4">
              Bạn cũng muốn có trải nghiệm tương tự?
            </h3>
            <button className="btn-traditional text-lg px-10 py-4">
              Đặt Tour Ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}