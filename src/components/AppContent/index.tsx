"use client";

import { usePathname } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React from "react";

export default function AppContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  // Hide site chrome for all routes under /studio
  const hideChrome = pathname.startsWith("/studio");

  return (
    <>
      {!hideChrome && <Header />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
