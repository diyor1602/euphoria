import localFont from "next/font/local";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import PlayStoreImg from "@/public/playstore.png";
import AppStoreImg from "@/public/appstore.png";

const causten = localFont({
  src: "../../../../public/fonts/Causten-Regular.ttf",
});
const Footer = () => {
  return (
    <div className={causten.className}>
      <footer className=" bg-custom-darkgray flex flex-col gap-4 text-white py-[60px]">
        <div className="flex gap-[80px] px-[180px]">
          <div className="flex flex-col gap-3 text-[18px]">
            <div className="mb-[15px] text-[28px] font-bold">Need Help</div>
            <div>Contact Us</div>
            <div>Track Order</div>
            <div>Return & Refunds</div>
            <div>FAQ's</div>
            <div>Career</div>
          </div>
          <div className="flex flex-col gap-3 text-[18px]">
            <div className="mb-[15px] text-[28px] font-bold">Company</div>
            <div>About Us</div>
            <div>euphoria Blog</div>
            <div>euphoriastan</div>
            <div>Collaboration</div>
            <div>Media</div>
          </div>
          <div className="flex flex-col gap-3 text-[18px]">
            <div className="mb-[15px] text-[28px] font-bold">More Info</div>
            <div>Term and Conditions</div>
            <div>Privacy Policy</div>
            <div>Shipping Policy</div>
            <div>Sitemap</div>
          </div>
          <div className="flex flex-col gap-3 text-[18px]">
            <div className="mb-[15px] text-[28px] font-bold">Location</div>
            <div>support@euphoria.in</div>
            <div>Eklingpura Chouraha, Ahmedabad Main Road</div>
            <div>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-[20px] px-[180px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-white w-[37px] h-[37px] grid place-items-center rounded-lg">
              <FaFacebookF size={20} className="text-custom-darkgray" />
            </div>
            <div className="bg-white w-[37px] h-[37px] grid place-items-center rounded-lg">
              <FaInstagram size={20} className="text-custom-darkgray" />
            </div>
            <div className="bg-white w-[37px] h-[37px] grid place-items-center rounded-lg">
              <FaTwitter size={20} className="text-custom-darkgray" />
            </div>
            <div className="bg-white w-[37px] h-[37px] grid place-items-center rounded-lg">
              <FaLinkedinIn size={20} className="text-custom-darkgray" />
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="font-bold text-[28px]">Download The App </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex gap-[4px] bg-button-gray p-[9px] w-[183px] cursor-pointer">
                <img
                  src={PlayStoreImg.src}
                  alt="PlayStore"
                  className="w-[36px] object-cover mr-4"
                />
                <div>
                  <div className="text-[10px]">android app on</div>
                  <div className="text-[18px]">Google Play</div>
                </div>
              </div>
              <div className="flex gap-[4px] bg-button-gray p-[9px] w-[183px] cursor-pointer">
                <img
                  src={AppStoreImg.src}
                  alt="AppStoreImg"
                  className="w-[30px] object-cover mr-4"
                />
                <div>
                  <div className="text-[10px]">Available on the</div>
                  <div className="text-[18px]">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[40px] py-[30px] px-[180px] border-y border-gray-500">
          <div className="font-bold text-[28px]">Popular Categories</div>
          <MdKeyboardArrowDown size={30} />
        </div>
        <div className="text-center px-[180px] mt-[40px]">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
