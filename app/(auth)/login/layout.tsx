import Navbar from "../_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-white w-full flex flex-col items-center">
      <div className="h-full w-[1440px]">
        <Navbar />
        <main className="container">{children}</main>
      </div>
    </div>
  );
};

export default MarketingLayout;
