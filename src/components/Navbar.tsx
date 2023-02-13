import { useState } from "react";
import registerIcon from "../assets/svg/registericon.svg";
import logoIcon from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // handle toggle menu
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="bg-secondarygreen text-white font-kumbh">
      <nav className="flex justify-between md:justify-around items-center px-3 py-1 md:py-0 ">
        <img src={logoIcon} alt=""  />

        {/* desktop menu */}
        <ul className="hidden md:flex font-bold">
          <li className="mx-4 list-none">Home</li>
          <li className="mx-4 list-none">About</li>
          <li className="mx-4 list-none">Features</li>
          <li className="mx-4 list-none">Faqs</li>
          <li className="mx-4 list-none">Contact</li>
        </ul>

        <Link to="/login">
        <button  className="hidden md:flex items-center rounded-sm border border-primarygreen text-primarygreen bg-white px-4 py-1 my-2">
            <img src={registerIcon} alt="" className="m-1" />
            
          Register Your Organisation
        </button>
        </Link>
        {showMenu ? (
          <i className="block md:hidden bx bx-x bx-md" onClick={handleToggle}></i>
        ) : (
          <i
            className="block md:hidden bx bx-menu bx-md"
            onClick={handleToggle}
          ></i>
        )}
      </nav>
      {/* Mobile Menu */}
      {showMenu ? (
        <ul className="absolute bg-secondarygreen flex flex-col md:hidden h-screen w-full font-bold ">
          <li className="p-3 list-none">Home</li>
          <li className="p-3 list-none">About</li>
          <li className="p-3 list-none">Features</li>
          <li className="p-3 list-none">FAQs</li>
          <li className="p-3 list-none">Contact</li>
        </ul>
      ) : null}
    </section>
  );
};

export default Navbar;
