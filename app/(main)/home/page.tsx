"use client";

import { redirect } from "next/navigation";

const HomePage = () => {
  const userId = localStorage.getItem("user");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    redirect("/login");
  }
  return (
    <div className="w-full h-full">
      <h1>Welcome User: {userId}</h1>
    </div>
  );
};

export default HomePage;
