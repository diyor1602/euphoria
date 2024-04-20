import Navbar from "./_components/navbar";
import Showcase from "./_components/showcase";
import DiscountCards from "./_components/discountcard";
import Footer from "./_components/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white w-full flex flex-col items-center">
      <div className="h-full w-full">
        <Navbar />
        <Showcase />
        <DiscountCards />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
