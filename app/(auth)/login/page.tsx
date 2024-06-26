"use client";

import LoginImg from "@/public/login.png";
import GoogleImg from "@/public/google.png";
import TwitterImg from "@/public/twitter.png";
import localFont from "next/font/local";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const causten = localFont({
  src: "../../../public/fonts/Causten-Regular.ttf",
});

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Generate random data for missing fields
    const username = e.target[0].value;
    const password = e.target[1].value;

    // Construct the data object
    const data = {
      username: username,
      password: password,
    };

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false); // Hide loader when request completes
      localStorage.setItem("isLoggedIn", "true");
      router.push("/home");
    }
  };

  return (
    <div className="w-full flex">
      {" "}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner"></div>
        </div>
      )}
      <img src={LoginImg.src} alt="Login" className="w-1/2 h-[956px]" />
      <div className="w-1/2 px-[100px] py-[60px]">
        <div className="text-[34px] font-semibold leading-8">Sign In Page</div>
        <div className="flex flex-col gap-[20px] mt-[50px]">
          <button className="flex items-center justify-center gap-4 text-custom-violet font-medium text-[22px] border border-black py-4 rounded-lg">
            <img src={GoogleImg.src} alt="google" />
            Continue With Google
          </button>
          <button className="flex items-center justify-center gap-4 text-custom-violet font-medium text-[22px] border border-black py-4 rounded-lg">
            <img src={TwitterImg.src} alt="twitter" />
            Continue With Twitter
          </button>
        </div>
        <div className="flex items-center gap-6 my-[50px]">
          <div className="w-full h-[2px] bg-custom-slate opacity-25"></div>
          <div>OR</div>
          <div className="w-full h-[2px] bg-custom-slate opacity-25"></div>
        </div>
        <form className={causten.className} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="username">User name or email address</label>
              <input
                id="username"
                type="text"
                defaultValue="mor_2314"
                className="border border-black py-4 px-5 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <label htmlFor="password">Password</label>
                <div
                  className="flex items-center justify-between gap-2 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  {showPassword ? "Hide" : "Show"}
                </div>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                defaultValue="83r5^_"
                className="border border-black py-4 px-5 rounded-lg"
              />
              <p className="font-normal underline text-right cursor-pointer">
                Forget your password
              </p>
            </div>
          </div>

          <div className="mt-[30px]">
            <button
              className="bg-custom-violet px-[48px] py-[12px] font-medium rounded-lg text-white border border-custom-violet"
              type="submit"
            >
              Sign In
            </button>
            <div className="mt-[10px]">
              Don’t have an account?{" "}
              <span className="underline">
                <Link href="./signup">Sign up</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
