"use client";

import Image from "next/image";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { useBreakpoint } from "@hooks/useBreakpoint";
import useViewportWidth from "@hooks/useViewportWidth";

import {
  HeroContainer,
  HeroTextContainer,
  HeroSmallTextContainer,
  HeroTextFirst,
  HeroText,
  HeroSmallText,
  HeroImageContainer,
  Highlight,
  Circle,
} from "./styles";

export default function Hero() {
  const { md } = useBreakpoint();
  const width = useViewportWidth();

  return (
    <>
      <HeroContainer>
        {/* Left */}

        <HeroTextContainer>
          {width < md ? (
            <>
              {/* Mobile */}
              <HeroText>
                I&#39;m <Highlight>Andrea Dayo</Highlight>
              </HeroText>
              <HeroSmallTextContainer>
                <HeroSmallText>Software Engineer</HeroSmallText>
                <HeroSmallText>based in Manila, Philippines.</HeroSmallText>
              </HeroSmallTextContainer>
            </>
          ) : (
            <>
              {/* Desktop */}
              <HeroTextFirst>
                <HeroText>Hello</HeroText> <Circle />
                <HeroText>My name is Andrea Dayo.</HeroText>
              </HeroTextFirst>
              <HeroText>
                I&#39;m a <Highlight>Software Engineer</Highlight>
              </HeroText>
              <HeroText>based in Manila, Philippines.</HeroText>
            </>
          )}
        </HeroTextContainer>

        {/* Right */}
        <HeroImageContainer>
          <Image
            src="/assets/Hero Image.png"
            alt="Hero Image"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </HeroImageContainer>
      </HeroContainer>

      <Divider type="black">Welcome to my portfolio</Divider>
      <MarqueeText>Software Engineer</MarqueeText>
    </>
  );
}
