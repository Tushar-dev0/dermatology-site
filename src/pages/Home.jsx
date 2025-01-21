import HeroSection from "../components/HeroSection";
import Faqs from "../components/Faqs";
import Reviews from "../components/Reviews";
import Section2 from "../components/Section2";
import FeaturedSection from "../components/FeaturedSection";
import StatisticsSection from "../components/StatisticsSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Section2 />
      <FeaturedSection/>
      <AboutSection/>
      <StatisticsSection/>
      <Reviews />
      <Faqs/>
      {/* <QuoteSection /> */}
    </>
  );
};

export default Home;
