import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <section className="font-kumbh">
            <Navbar />
            <HeroSection />
            <AboutSection />
        </section>
     );
}
 
export default Home;