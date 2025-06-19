import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Du Lịch Hà Nội - Thăng Long Cổ Đô | Khám Phá Văn Hóa Nghìn Năm',
  description: 'Khám phá vẻ đẹp cổ kính của Hà Nội - thủ đô nghìn năm tuổi. Tour du lịch văn hóa, ẩm thực và lịch sử với dịch vụ chuyên nghiệp.',
  keywords: 'du lịch Hà Nội, tour Hà Nội, phố cổ Hà Nội, văn hóa Việt Nam, lịch sử Hà Nội',
  authors: [{ name: 'Du Lịch Hà Nội' }],
  openGraph: {
    title: 'Du Lịch Hà Nội - Thăng Long Cổ Đô',
    description: 'Khám phá vẻ đẹp cổ kính của thủ đô nghìn năm tuổi',
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}