import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonySection from "../components/TestimonySection";
import { mockTestimonies } from "../mocks/testimonies.mock";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <TestimonySection testimonies={mockTestimonies} />
      <Footer />
    </>
  );
};

export default Home;
