import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/ReviewSection";
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
        </section>
     );
}
 
export default Home;