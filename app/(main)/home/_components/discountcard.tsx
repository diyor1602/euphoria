const DiscountCards = () => {
  return (
    <div className="flex items-center gap-[30px] px-[100px] pt-[130px] pb-[100px]">
      <div className="bg-[url(../public/ycard.jpg)] bg-cover rounded-lg bg-no-repeat w-full text-white py-[60px] px-[30px] shadow-2xl">
        <div className="font-extrabold mb-[25px]">Low Price</div>
        <div className="font-extrabold text-[34px] mb-[10px]">
          High Coziness
        </div>
        <div className="mb-[40px]">UPTO 50% OFF</div>
        <div className="text-[20px] font-extrabold underline cursor-pointer mb-[40px]">
          Explore Items
        </div>
      </div>
      <div className="bg-[url(../public/ycard.jpg)] bg-cover rounded-lg bg-no-repeat w-full text-white py-[60px] px-[30px] shadow-2xl">
        <div className="font-extrabold mb-[25px]">Low Price</div>
        <div className="font-extrabold text-[34px] mb-[10px]">
          High Coziness
        </div>
        <div className="mb-[40px]">UPTO 50% OFF</div>
        <div className="text-[20px] font-extrabold underline cursor-pointer mb-[40px]">
          Explore Items
        </div>
      </div>
    </div>
  );
};

export default DiscountCards;
