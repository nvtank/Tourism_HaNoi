export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with traditional pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-yellow-800">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Traditional decoration */}
          <div className="flex justify-center mb-8">
            <div className="text-6xl text-yellow-400 opacity-80">❀ ❀ ❀</div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow mb-6">
            <span className="block">Hà Nội</span>
            <span className="block text-gradient text-6xl md:text-8xl lg:text-9xl">Thăng Long</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-yellow-100 font-light leading-relaxed mb-4">
              "Nghìn năm văn hiến, ngàn năm lịch sử"
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Khám phá vẻ đẹp cổ kính của kinh đô nghìn năm tuổi. Từ những ngôi đền cổ kính đến những con phố nhỏ đầy thơ mộng, 
              Hà Nội sẽ mang đến cho bạn những trải nghiệm văn hóa độc đáo và khó quên.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="btn-traditional text-lg px-8 py-4 group">
              <span className="relative z-10">Khám Phá Ngay</span>
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg">
              Xem Video Giới Thiệu
            </button>
          </div>

          {/* Traditional decoration */}
          <div className="flex justify-center">
            <div className="text-4xl text-yellow-400 opacity-60">❀ ❀ ❀</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}