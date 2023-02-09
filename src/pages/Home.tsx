import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <section className="font-kumbh">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeatureSection />
        </section>
     );
}
 
export default Home;