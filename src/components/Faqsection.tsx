import faqImg from "../assets/svg/faqsection.svg";

const Faqsection = () => {
    return ( 
        <section className="flex flex-col items-center mt-4 m-1">
        <h3 className="text-primarygreen bg-primarygreen bg-opacity-20 w-[100px] text-center p-1 rounded-full font-bold ">
          Benefits
        </h3>
        <h1 className=" text-2xl text-center md:text-4xl  font-bold text-opacity-10 my-3 ">
          Benefits of the platform
        </h1>
        <h4 className="mb-2">Plugin and start enjoying the benefits of our platform.</h4>
        <article className="flex flex-col md:flex-row justify-around ">
        <select name="" id="">
          <option value="Ensure that your organisation or campaign can collect funds and your members can keep on giving beyond any physical restrictions that may be imposed by governments."></option>
        </select>
        <img src={faqImg} alt="" className="md:w-[40%]"  />
        </article>
      </section>
     );
}
 
export default Faqsection;