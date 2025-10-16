"use client";

import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";

export default function Title() {
  return (
    <>
      <Divider type="black">Welcome to my projects</Divider>
      <MarqueeText>Projects</MarqueeText>
    </>
  );
}
