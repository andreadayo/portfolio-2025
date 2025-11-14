"use client";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Circle,
} from "./styles";
import MarqueeText from "../MarqueeText";

export default function NotFound() {
  return (
    <>
      <Divider type="black" ctaLabel="Learn More" href="/about">
        Error 404
      </Divider>
      <MarqueeText>Page Not Found</MarqueeText>
      <AboutContainer>
        <ElementsContainer>
          {/* TODO: Add falling elements animation */}
        </ElementsContainer>
        <TextContainer>
          <Circle />
          <Heading>Oops! Looks like you got lost.</Heading>
          <Button type="black" size="auto" href="#">
            Go back to home
          </Button>
        </TextContainer>
        <ElementsContainer>
          {/* TODO: Add falling elements animation */}
        </ElementsContainer>
      </AboutContainer>
    </>
  );
}
