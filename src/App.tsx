import Header from '@/components/ui/header-1';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-gray-900 font-sans selection:bg-accent selection:text-primary overflow-x-hidden">
      <SmoothScroll>
        <Header />
        <main>
          <Hero />
          <LogoWall />
          <About />
          <Services />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
