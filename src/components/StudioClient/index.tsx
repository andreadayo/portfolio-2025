"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioClient() {
  return (
    <div style={{ alignSelf: "stretch", width: "100%", minHeight: "100vh" }}>
      <NextStudio config={config} />
    </div>
  );
}
