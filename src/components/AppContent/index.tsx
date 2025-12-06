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

type FooterData = {
  dividerTitle?: string;
  message?: string;
  email?: string;
  exploreLinks?: NavItem[];
  socialLinks?: Array<{
    label?: string;
    url?: string;
  }>;
  copyright?: string;
};

export default function AppContent({
  nav,
  footer,
  children,
}: {
  nav?: LinksData;
  footer?: FooterData;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  // Hide site chrome for all routes under /studio
  const hideChrome = pathname.startsWith("/studio");

  return (
    <>
      {!hideChrome && <Header links={nav?.links} status={nav?.status} />}
      {children}
      {!hideChrome && <Footer data={footer} />}
    </>
  );
}
