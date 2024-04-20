"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const router = useRouter();
  if (!isLoggedIn) {
    router.push("/login");
  } else {
    router.push("/dashboard");
  }
}
