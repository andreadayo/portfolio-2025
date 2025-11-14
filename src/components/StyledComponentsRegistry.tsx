"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet } from "styled-components";

// Safe registry pattern for Next.js app-router + styled-components.
// Creates one ServerStyleSheet per render on the server, collects styles,
// and injects them into the head via useServerInsertedHTML.
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheetRef = React.useRef<ServerStyleSheet | null>(null);

  if (!sheetRef.current) {
    try {
      sheetRef.current = new ServerStyleSheet();
    } catch {
      sheetRef.current = null;
    }
  }

  useServerInsertedHTML(() => {
    try {
      if (!sheetRef.current) return null;
      const el = sheetRef.current.getStyleElement();
      // Seal the sheet to prevent memory leaks.
      try {
        sheetRef.current.seal();
      } catch {
        // ignore
      }
      return <>{el}</>;
    } catch {
      // If styled-components throws during getStyleElement, return nothing
      // and allow client-side injection to proceed to avoid build failure.
      return null;
    }
  });

  // During SSR, collect styles from children. On client, just render children.
  if (typeof window === "undefined" && sheetRef.current) {
    try {
      return sheetRef.current.collectStyles(<>{children}</>);
    } catch {
      // If collecting throws, fallback to rendering children to avoid crash.
      return <>{children}</>;
    }
  }

  return <>{children}</>;
}
