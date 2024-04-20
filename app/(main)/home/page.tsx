"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      redirect("/login");
    }
  }, []);

  return (
    <div className="w-full h-full">
      <h1>Welcome User</h1>
    </div>
  );
};

export default HomePage;
