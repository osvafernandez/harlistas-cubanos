import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logoEnglish from "./imgs/logoEnglish.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img
        className="mx-0 mt-[20px] max-w-xs"
        src={logoEnglish}
        alt="una foto de harley"
      />
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#FF6600]">Inicio</li>
        <li className="p-4  cursor-pointer hover:text-[#FF6600]">
          Proximo Evento
        </li>
        <li className="p-4  cursor-pointer hover:text-[#FF6600]">Galeria</li>
        <li className="p-4  cursor-pointer hover:text-[#FF6600]">Contactos</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="mr-[10px] text-3xl font-bold p-5 text-[#FF6600]">
          Harlistas Cubanos
        </h1>

        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600  hover:text-[#FF6600]">
            Inicio
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#FF6600]">
            Proximo Evento
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#FF6600]">
            Galeria
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#FF6600]">
            Contactos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
