"use client";

import Image from "next/image";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";

import {
  HeroContainer,
  HeroTextContainer,
  HeroTextFirst,
  HeroText,
  HeroImageContainer,
  Highlight,
  Circle,
} from "./styles";

export default function Hero() {
  return (
    <>
      <HeroContainer>
        {/* Left */}
        <HeroTextContainer>
          <HeroTextFirst>
            <HeroText>Hello</HeroText> <Circle />
            <HeroText>My name is Andrea Dayo.</HeroText>
          </HeroTextFirst>
          <HeroText>
            I&#39;m a <Highlight>Software Engineer</Highlight>
          </HeroText>
          <HeroText>based in Manila, Philippines.</HeroText>
        </HeroTextContainer>

        {/* Right */}
        <HeroImageContainer>
          <Image
            src="/assets/Hero Image.png"
            alt="Hero Image"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </HeroImageContainer>
      </HeroContainer>

      <Divider type="black">Welcome to my portfolio</Divider>
      <MarqueeText>Software Engineer</MarqueeText>
    </>
  );
}
