"use client";

import SignUpImg from "@/public/signup.png";
import GoogleImg from "@/public/google.png";
import TwitterImg from "@/public/twitter.png";
import localFont from "next/font/local";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const causten = localFont({
  src: "../../../public/fonts/Causten-Regular.ttf",
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: any) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? "" : "Invalid email address");
  };

  return (
    <div className="w-full flex">
      <img src={SignUpImg.src} alt="Login" className="w-1/2 h-[956px]" />
      <div className="w-1/2 px-[100px] py-[60px]">
        <div className="text-[34px] font-semibold leading-8">Sign Up</div>
        <div className={causten.className}>
          <div className="text-gray-500 mt-[10px]">
            Sign up for free to access to in any of our products
          </div>
        </div>
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
        <div className={causten.className}>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="username">Email address</label>
              <input
                id="username"
                type="email"
                className="border border-black py-4 px-5 rounded-lg"
                placeholder="designer@gmail.com"
                onBlur={(e) => validateEmail(e.target.value)}
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
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
                className="border border-black py-4 px-5 rounded-lg"
              />
              <p className="font-normal text-gray-500">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
          </div>
        </div>
        <div className={causten.className}>
          <div className="mt-[30px] flex flex-col gap-[18px]">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                className="accent-gray-500"
              />
              <label htmlFor="agree" className="text-[18px] text-gray-500">
                Agree to our{" "}
                <span className="underline cursor-pointer">Terms of use</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                className="accent-gray-500"
              />
              <label htmlFor="newsletter" className="text-[18px] text-gray-500">
                Subscribe to our monthly newsletter
              </label>
            </div>
          </div>
        </div>
        <div className={causten.className}>
          <div className="mt-[30px]">
            <button className="bg-custom-violet px-[48px] py-[12px] font-medium rounded-lg text-white border border-custom-violet">
              Sign In
            </button>
            <div className="mt-[10px]">
              Already have an account?{" "}
              <span className="underline">
                <Link href="./login">Log in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
