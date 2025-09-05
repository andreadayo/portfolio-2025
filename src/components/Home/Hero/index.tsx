"use client";

import {
  HeaderContainer,
  HeroTextContainer,
  HeroText,
  HeroImageContainer,
} from "./styles";

export default function Hero() {
  return (
    <HeaderContainer>
      {/* Left */}
      <HeroTextContainer>
        <HeroText>Hello Im Andrea Dayo</HeroText>
      </HeroTextContainer>

      {/* Right */}
      <HeroImageContainer>hellow</HeroImageContainer>
    </HeaderContainer>
  );
}
