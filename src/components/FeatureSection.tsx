import notification from "../assets/svg/notification.svg";

const FeatureSection = () => {
  return (
    <section className="flex flex-col items-center justify-around mt-10 p-3 ">
      <h3 className="text-primarygreen bg-primarygreen bg-opacity-20 w-[100px] text-center p-1 rounded-full font-bold ">
        Features
      </h3>
      <h1 className=" text-2xl md:text-4xl  font-bold text-opacity-10 my-3 ">
        Many Features available on the platform
      </h1>
      <h5>
        We have modules to support multiple payment functionalities to guarantee
        you experience the best.
      </h5>
      <article className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[95%] sm:w-[90%] ">
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">Recurring Payments</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">Donors can easily set up recurring payments to a fund an organisation of their choice.</h5>
        </div>
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">Daily Deposits</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">Benefactors can easily make adhoc or daily deposits as and when required.</h5>
        </div>
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">QR Payments</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">We provide a unique QR Code for each beneficiary to ensure a seamless scan-to-pay process.</h5>
        </div>
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">Detailed Reporting</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">Payees receive detailed reports on all funds received to ensure accurate accounting.</h5>
        </div>
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">Profile Registration</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">For added ease of transacting and navigation, donors can register and create a profile to see payment history and manage beneficiaries.</h5>
        </div>
        <div className="flex flex-col items-center mt-4">
            <img src={notification} alt="" className="p-3 border rounded-full " />
            <h3 className="text-primarygreen font-bold mt-2">Attractive Interface</h3>
            <h5 className="w-[95%] md:w-[80%] mt-3 text-center ">Easy user interface and experience.</h5>
        </div>
      </article>
    </section>
  );
};

export default FeatureSection;
