const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white w-full flex flex-col items-center">
      <div className="h-full w-[1440px]">
        <main className="container">{children}</main>
      </div>
    </div>
  );
};

export default HomeLayout;
