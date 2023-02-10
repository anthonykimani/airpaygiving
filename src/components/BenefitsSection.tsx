import benefitPhoto from "../assets/svg/benefit.svg";

const BenefitsSection = () => {
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
      <article className="grid grid-cols-1 md:grid-cols-2 content-around md:w-[50%] ">
        <div className="border border-gray-300 mt-2 md:w-[95%] p-3 h-[210px] flex flex-col justify-around rounded-lg ">
          <span className="flex items-center justify-start">
            <i className="bx bxs-user bx-sm mr-2 text-primarygreen"></i>
            <h3 className="font-bold">Easy Record Keeping</h3>
          </span>
          <h4 className="text-sm">
            Keep track of all funds paid to your campaign or organisation along
            with the relevant details of the payee.
          </h4>
        </div>
        <div className="border border-gray-300 mt-2 md:w-[95%] p-3 h-[230px] flex flex-col justify-around rounded-lg ">
          <span className="flex items-center justify-start">
            <i className="bx bxs-user bx-sm mr-2 text-primarygreen"></i>
            <h3 className="font-bold">Easy Record Keeping</h3>
          </span>
          <h4 className="text-sm">
            Keep track of all funds paid to your campaign or organisation along
            with the relevant details of the payee.
          </h4>
        </div>
        <div className="border border-gray-300 mt-2 md:w-[95%] p-3 h-[250px] flex flex-col justify-around rounded-lg ">
          <span className="flex items-center justify-start">
            <i className="bx bxs-user bx-sm mr-2 text-primarygreen"></i>
            <h3 className="font-bold">Easy Record Keeping</h3>
          </span>
          <h4 className="text-sm">
            Keep track of all funds paid to your campaign or organisation along
            with the relevant details of the payee.
          </h4>
        </div>
        <div className="border border-gray-300 mt-2 md:w-[95%] p-3 h-[270px] flex flex-col justify-around rounded-lg md:mt-4 ">
          <span className="flex items-center justify-start">
            <i className="bx bxs-user bx-sm mr-2 text-primarygreen"></i>
            <h3 className="font-bold">Easy Record Keeping</h3>
          </span>
          <h4 className="text-sm">
            Keep track of all funds paid to your campaign or organisation along
            with the relevant details of the payee.
          </h4>
        </div>
      </article>
      <img src={benefitPhoto} alt="" className="md:w-[40%]"  />
      </article>
    </section>
  );
};

export default BenefitsSection;
