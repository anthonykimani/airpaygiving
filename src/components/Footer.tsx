const Footer = () => {
  return (
    <footer className="text-center bg-primarygreen text-white ">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start font-kumbh ">
        <ul className="text-sm w-[95%] md:w-[30%] my-5 flex flex-col items-start">
          <h3 className=" font-bold text-xl mt-3">
            Prohealth Medical Staffing
          </h3>
          <a className="flex items-center my-1">
            <i className="bx bxs-envelope bx-sm mr-1"></i>
            airpaygiving@gmail.com
          </a>
          <a href="" className="flex items-center my-1">
            <i className="fa-sharp fa-solid fa-location-dot fa-xl mr-1"></i>Windhoek
            Namibia
          </a>
          <a href="" className="flex items-center my-1">
            <i className="bx bxs-phone bx-sm mr-1"></i>+1 (503) 705-0431
          </a>
          <span>
            <i className="m-1 bx bxl-facebook-circle bx-sm"></i>
            <i className="m-1 bx bxl-twitter bx-sm"></i>
            <i className="m-1 bx bxl-linkedin-square bx-sm"></i>
          </span>
        </ul>
        <ul className="text-sm w-[95%] md:w-[30%] text-center my-5">
          <h3 className=" font-bold text-xl mt-3">What we do</h3>
          <h4>
            Airpay Giving eliminates the friction of giving to any organisation.
            By providing a platform for easy registration and payment
          </h4>
        </ul>
        <ul className="text-sm w-[95%] md:w-[30%] text-center my-5">
          <h3 className=" font-bold text-xl mt-3">Support</h3>
          <li>Help & Support</li>
          <li>FAQs</li>
          <li>Direct Contact</li>
        </ul>
      </div>
      <hr />
      <footer className="">&copy;2023 AirPayGiving All Rights Reserved.</footer>
    </footer>
  );
};

export default Footer;
