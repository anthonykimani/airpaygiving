import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import ContactSection from "../components/ContactSection";
import Faqsection from "../components/Faqsection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";
import Subscribe from "../components/Subscribe";
import VideoSection from "../components/VideoSection";

const Home = () => {
    return ( 
        <section className="font-kumbh">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeatureSection />
            <VideoSection />
            <ReviewSection />
            <BenefitsSection />
            <Subscribe />
            <Faqsection />
            <ContactSection />
            <Footer />
        </section>
     );
}
 
export default Home;