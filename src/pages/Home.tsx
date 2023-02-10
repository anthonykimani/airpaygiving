import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";

const Home = () => {
    return ( 
        <section className="font-kumbh">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeatureSection />
            <VideoSection />
        </section>
     );
}
 
export default Home;