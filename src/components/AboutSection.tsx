import aboutImage from "../assets/svg/aboutimage.svg";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center p-1 md:p-3 ">
      <img src={aboutImage} alt="" className=" w-[95%] md:w-[45%] " />
      <article className="flex flex-col w-[95%] md:w-[45%] m-5 h-[350px] justify-around ">
        <h3 className="text-primarygreen bg-primarygreen bg-opacity-20 w-[200px] text-center p-1 rounded-full font-bold ">About Airpay Giving</h3>
        <h1 className=" text-3xl md:text-4xl  font-bold text-opacity-10 my-3 ">Manage your church giving efficiently.</h1>
        <h5>
          COVID-19 Restrictions have prevented various associations, such as
          churches, non-profit organisations, schools etc. from raising funds
          through traditional “in-person” ways of collecting.
        </h5>
        <button className="bg-primarygreen text-white py-2 px-4 rounded font-bold w-[150px] mt-4">
          Learn More
        </button>
      </article>
    </section>
  );
};

export default AboutSection;
