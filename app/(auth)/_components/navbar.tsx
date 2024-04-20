import Logo from "@/public/Logo.png";
import Link from "next/link";
import localFont from "next/font/local";

const causten = localFont({
  src: "../../../public/fonts/Causten-Regular.ttf",
});

const Navbar = () => {
  return (
    <nav className={causten.className}>
      <div className="flex items-center py-4 px-[100px]">
        <Link href="./">
          <img src={Logo.src} alt="Logo" className="h-8" />
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[184px] bg-custom-gray outline-none border-none rounded-lg px-4 py-2 ml-[255px]"
          />
          <select
            name="language"
            id="language"
            className="ml-[180px] mr-auto font-medium"
          >
            <option value="en">English (United States) ‎ ‎ ‎ ‎ </option>
            <option value="es">Spanish</option>
          </select>
          <div className="flex items-center gap-[30px] ml-[50px]">
            <Link href="./login">
              <button className="bg-custom-violet px-[48px] py-[12px] font-medium rounded-lg text-white border border-custom-violet">
                Login
              </button>
            </Link>
            <Link href="./signup">
              <button className="text-custom-violet px-[48px] py-[12px] font-medium rounded-lg border border-black">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
