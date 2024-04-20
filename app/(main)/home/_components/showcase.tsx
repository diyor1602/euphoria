import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Showcase = () => {
  return (
    <div className="bg-[url('../public/showcase.jpg')] w-full bg-cover bg-no-repeat h-[700px] relative flex items-center">
      <SlArrowLeft
        className="absolute top-[50%] left-[20px] text-white cursor-pointer"
        size={40}
      />
      <SlArrowRight
        className="absolute top-[50%] right-[20px] text-white cursor-pointer"
        size={40}
      />
      <div className="flex flex-col gap-[40px] ml-[190px] text-white">
        <div className="font-medium text-[32px]">T-shirt / Tops</div>
        <div className="font-extrabold text-[78px]">
          Summer <br /> Value Pack
        </div>
        <div className="font-medium text-[32px]">cool / colorful / comfy</div>
        <button className="bg-white px-[70px] py-[16px] w-fit font-bold rounded-lg text-black text-[24px]">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex items-center gap-px">
        <div className="w-[62px] h-[10px] bg-white rounded-l-lg	"></div>
        <div className="w-[62px] h-[10px] bg-white opacity-50 rounded-r-lg	"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Showcase;
