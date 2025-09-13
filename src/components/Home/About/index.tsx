"use client";

import { Divider } from "@components/Divider";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Text,
  Highlight,
} from "./styles";

export default function About() {
  return (
    <>
      <Divider type="black" ctaLabel="Learn More" href="/about">
        01 About Me
      </Divider>
      <AboutContainer>
        <ElementsContainer />
        <TextContainer>
          <Heading>I design. I code. I build.</Heading>
          <Text>
            I&#39;m a <Highlight>Software Engineer</Highlight> who loves design
            just as much as code. I enjoy shaping ideas from concept to code,
            making sure they look good and feel great to use. Alongside my
            personal projects, I also do freelance work, helping teams and
            brands build products that truly connect with people.
          </Text>
        </TextContainer>
      </AboutContainer>
    </>
  );
}
