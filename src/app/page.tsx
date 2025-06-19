import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedTours from '@/components/FeaturedTours';
import CulturalHighlights from '@/components/CulturalHighlights';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTours />
      <CulturalHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
}