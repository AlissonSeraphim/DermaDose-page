import Content from '../components/Content';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud';
import Values from '../components/Values';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

function MainPage() {
  return (
    <div>
      <Hero />
      <Values />
      <LogoCloud />
      <Content />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default MainPage;
