import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HistorySection from '@/components/HistorySection';
import FeaturedTours from '@/components/FeaturedTours';
import CulturalHighlights from '@/components/CulturalHighlights';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HistorySection />
      <FeaturedTours />
      <CulturalHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
}