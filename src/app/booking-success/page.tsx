'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { OrderData } from '@/types/booking';

export default function BookingSuccessPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    // Get order data from localStorage
    const storedOrder = localStorage.getItem('lastOrder');
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder) as OrderData);
    } else {
      // Redirect to home if no order data
      window.location.href = '/';
    }
  }, []); // Empty dependency array is correct here as this should only run once

  const downloadInvoice = () => {
    if (!orderData) return;

    // Create a simple invoice content
    const invoiceContent = `
      ==========================================
      HÓA ĐƠN ĐẶT TOUR - DU LỊCH HÀ NỘI
      ==========================================
      
      Mã đơn hàng: ${orderData.orderId}
      Mã đặt tour: ${orderData.bookingId}
      Ngày đặt: ${new Date(orderData.createdAt).toLocaleDateString('vi-VN')}
      Ngày thanh toán: ${new Date(orderData.paidAt).toLocaleDateString('vi-VN')}
      
      ------------------------------------------
      THÔNG TIN KHÁCH HÀNG
      ------------------------------------------
      Họ tên: ${orderData.customerInfo.fullName}
      Điện thoại: ${orderData.customerInfo.phone}
      Email: ${orderData.customerInfo.email}
      Địa chỉ: ${orderData.customerInfo.address || 'Không có'}
      
      ------------------------------------------
      THÔNG TIN TOUR
      ------------------------------------------
      Tên tour: ${orderData.tour.name}
      Ngày khởi hành: ${new Date(orderData.date).toLocaleDateString('vi-VN')}
      Thời gian: ${orderData.tour.duration}
      Số người lớn: ${orderData.adults}
      Số trẻ em: ${orderData.children}
      
      ------------------------------------------
      CHI TIẾT THANH TOÁN
      ------------------------------------------
      Tạm tính: ${orderData.pricing.subtotal.toLocaleString('vi-VN')} VNĐ
      Giảm giá: -${orderData.pricing.discount.toLocaleString('vi-VN')} VNĐ
      Tổng cộng: ${orderData.pricing.total.toLocaleString('vi-VN')} VNĐ
      
      Phương thức thanh toán: ${orderData.paymentMethod === 'bank' ? 'Chuyển khoản ngân hàng' : 
                                orderData.paymentMethod === 'card' ? 'Thẻ tín dụng' :
                                orderData.paymentMethod === 'ewallet' ? 'Ví điện tử' : 'Tiền mặt'}
      
      ------------------------------------------
      LIÊN HỆ HỖ TRỢ
      ------------------------------------------
      Hotline: 024 3825 xxxx
      Email: support@dulichhanoi.vn
      Địa chỉ: 123 Phố Cổ, Hoàn Kiếm, Hà Nội
      
      Cảm ơn bạn đã tin tưởng Du Lịch Hà Nội!
      ==========================================
    `;

    // Create and download file
    const element = document.createElement('a');
    const file = new Blob([invoiceContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `invoice-${orderData.orderId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p>Đang tải thông tin đơn hàng...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Success Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white text-shadow mb-6">
            Đặt Tour Thành Công!
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Cảm ơn bạn đã tin tưởng Du Lịch Hà Nội. Chúng tôi sẽ liên hệ với bạn sớm nhất!
          </p>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Order Summary */}
          <div className="traditional-card p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-4xl text-green-600 mb-4">✅</div>
              <h2 className="font-display text-3xl font-bold text-red-900 mb-4">
                Thông Tin Đơn Hàng
              </h2>
              <div className="flex justify-center space-x-8 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Mã đơn hàng:</span>
                  <p className="text-red-900 font-bold">{orderData.orderId}</p>
                </div>
                <div>
                  <span className="font-semibold">Mã đặt tour:</span>
                  <p className="text-red-900 font-bold">{orderData.bookingId}</p>
                </div>
                <div>
                  <span className="font-semibold">Ngày đặt:</span>
                  <p className="text-red-900 font-bold">
                    {new Date(orderData.createdAt).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tour Info */}
              <div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Thông Tin Tour
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Image
                    src={orderData.tour.image}
                    alt={orderData.tour.name}
                    width={300}
                    height={128}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-red-900 mb-2">{orderData.tour.name}</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">Ngày khởi hành:</span> {new Date(orderData.date).toLocaleDateString('vi-VN')}</p>
                    <p><span className="font-semibold">Thời gian:</span> {orderData.tour.duration}</p>
                    <p><span className="font-semibold">Số người:</span> {orderData.adults} người lớn, {orderData.children} trẻ em</p>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="font-display text-xl font-bold text-red-900 mb-4">
                  Thông Tin Khách Hàng
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-red-800">Họ tên:</span>
                      <p className="text-gray-700">{orderData.customerInfo.fullName}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-red-800">Điện thoại:</span>
                      <p className="text-gray-700">{orderData.customerInfo.phone}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-red-800">Email:</span>
                      <p className="text-gray-700">{orderData.customerInfo.email}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-red-800">Địa chỉ:</span>
                      <p className="text-gray-700">{orderData.customerInfo.address || 'Không có'}</p>
                    </div>
                    {orderData.customerInfo.specialRequests && (
                      <div>
                        <span className="font-semibold text-red-800">Yêu cầu đặc biệt:</span>
                        <p className="text-gray-700">{orderData.customerInfo.specialRequests}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-display text-xl font-bold text-red-900 mb-4 text-center">
                Chi Tiết Thanh Toán
              </h3>
              <div className="max-w-md mx-auto">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{orderData.pricing.subtotal.toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                  {orderData.pricing.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá:</span>
                      <span>-{orderData.pricing.discount.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-red-900 border-t border-gray-200 pt-3">
                    <span>Tổng cộng:</span>
                    <span>{orderData.pricing.total.toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 mt-4">
                    <p>Phương thức thanh toán: <span className="font-semibold">
                      {orderData.paymentMethod === 'bank' ? 'Chuyển khoản ngân hàng' : 
                       orderData.paymentMethod === 'card' ? 'Thẻ tín dụng' :
                       orderData.paymentMethod === 'ewallet' ? 'Ví điện tử' : 'Tiền mặt'}
                    </span></p>
                    <p className="text-green-600 font-semibold">✅ Đã thanh toán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={downloadInvoice}
              className="traditional-card p-6 text-center hover-lift group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📄</div>
              <h3 className="font-semibold text-red-900 mb-2">Tải Hóa Đơn</h3>
              <p className="text-sm text-gray-600">Tải xuống hóa đơn điện tử</p>
            </button>

            <Link href="/contact" className="traditional-card p-6 text-center hover-lift group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📞</div>
              <h3 className="font-semibold text-red-900 mb-2">Liên Hệ Hỗ Trợ</h3>
              <p className="text-sm text-gray-600">Cần hỗ trợ? Liên hệ ngay</p>
            </Link>

            <Link href="/tours" className="traditional-card p-6 text-center hover-lift group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-semibold text-red-900 mb-2">Đặt Tour Khác</h3>
              <p className="text-sm text-gray-600">Khám phá thêm tour mới</p>
            </Link>
          </div>

          {/* Next Steps */}
          <div className="traditional-card p-8">
            <h3 className="font-display text-2xl font-bold text-red-900 mb-6 text-center">
              Các Bước Tiếp Theo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-red-900 mb-2">Xác Nhận Đặt Tour</h4>
                <p className="text-sm text-gray-600">Chúng tôi sẽ gọi điện xác nhận trong vòng 2 giờ</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-red-900 mb-2">Chuẩn Bị Tour</h4>
                <p className="text-sm text-gray-600">Nhận thông tin chi tiết qua email trước 1 ngày</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-red-900 mb-2">Bắt Đầu Tour</h4>
                <p className="text-sm text-gray-600">Tập trung đúng giờ tại điểm hẹn</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-4">Cần Hỗ Trợ?</h3>
              <p className="text-yellow-100 mb-6">
                Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:024382xxxxx"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-bold transition-colors duration-300"
                >
                  📞 Gọi Hotline
                </a>
                <a
                  href="mailto:support@dulichhanoi.vn"
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 px-8 py-3 rounded-full font-bold transition-colors duration-300"
                >
                  ✉️ Gửi Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}