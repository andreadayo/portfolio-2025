"use client";

import { usePathname } from "next/navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React from "react";

type NavItem = {
  label?: string;
  path?: string;
};

type LinksData = {
  links?: NavItem[];
  status?: string;
};

export default function AppContent({
  nav,
  children,
}: {
  nav?: LinksData;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  // Hide site chrome for all routes under /studio
  const hideChrome = pathname.startsWith("/studio");

  return (
    <>
      {!hideChrome && <Header links={nav?.links} status={nav?.status} />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
