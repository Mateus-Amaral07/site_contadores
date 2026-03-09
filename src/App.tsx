import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#010518] text-gray-900 font-sans selection:bg-accent selection:text-[#010518]">
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
