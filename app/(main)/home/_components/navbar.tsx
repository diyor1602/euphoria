import Logo from "@/public/Logo.png";
import localFont from "next/font/local";
import { IoIosSearch } from "react-icons/io";
import UserLogo from "@/public/user.png";
import HeartLogo from "@/public/heart.png";
import CartLogo from "@/public/cart.png";

const causten = localFont({
  src: "../../../../public/fonts/Causten-Regular.ttf",
});
const Navbar = () => {
  return (
    <div className={causten.className}>
      <nav className="flex items-center gap-2 px-[100px] py-[30px]">
        <img src={Logo.src} alt="Logo" className="mr-20" />
        <ul className="flex items-center gap-[40px] text-[22px] text-custom-lightgray">
          <li className="font-bold text-black">Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Combos</li>
          <li>Joggers</li>
        </ul>
        <div className="flex items-center gap-2 px-[20px] py-[12px] bg-custom-gray ml-[70px] rounded-lg">
          <IoIosSearch size={20} className="text-custom-lightgray" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-center gap-[12px] ml-[auto]">
          <div className="bg-custom-gray p-[12px] rounded-lg">
            <img src={UserLogo.src} alt="User" />
          </div>
          <div className="bg-custom-gray p-[12px] rounded-lg">
            <img src={HeartLogo.src} alt="Heart" />
          </div>
          <div className="bg-custom-gray p-[12px] rounded-lg">
            <img src={CartLogo.src} alt="Cart" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
