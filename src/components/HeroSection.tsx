import heroLogo from "../assets/svg/herologo.svg";
import playLogo from "../assets/svg/play.svg";

const HeroSection = () => {
  return (
    <section className="font-kumbh flex flex-col md:flex-row justify-center items-center mb-24 bg-primarygreen md:h-screen ">
      <article className="p-3 md:p-5 w-[100%] md:w-[50%] md">
        <h1 className="text-3xl xsm:text-4xl  md:text-6xl font-bold text-white">
          Anytime, Anywhere Giving
        </h1>
        <h2 className="text-white text-base xsm:text-xl mt-10 text-opacity-80">
          Airpay Giving eliminates the friction of giving to any organisation.
          By providing a platform for easy registration and payment{" "}
        </h2>
        <div className="flex justify-between items-center mt-10 w-[280px]">
          <button className="text-primarygreen bg-white py-2 px-4 rounded font-bold">
            Start Giving
          </button>
          <img src={playLogo} alt="" />
          <h4 className="text-white font-bold">How it works</h4>
        </div>
      </article>
      <img src={heroLogo} alt="" className="w-[95%] md:w-[40%] m-5 " />
    </section>
  );
};

export default HeroSection;
