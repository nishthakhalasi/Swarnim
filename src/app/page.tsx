"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import LoginPage from "@/app/(auth)/login/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <LoginPage />
    </>
  );
}
