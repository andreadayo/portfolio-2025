"use client";

import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Text,
  Highlight,
} from "./styles";

export default function Introduction() {
  return (
    <>
      <Divider type="black">Get to know me</Divider>
      <MarqueeText>About</MarqueeText>
      <Divider type="black">01 Introduction</Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            I like doing a little bit of <Highlight>everything</Highlight>.
          </Heading>
          <Text>
            I&#39;m a Computer Science graduate passionate about web
            development, design, and machine learning. While studying at
            university, I served as the CTO of TomasinoWeb, where I worked as a
            front-end developer and UI/UX designer, leading projects like the
            R101 Website and ThomScore.
            <br />
            <br />
            Since then, I&#39;ve continued honing my skills through internships
            and freelance projects, designing and building landing pages and
            platforms for a variety of clients.
            <br />
            <br />
            When I&#39;m not coding or designing, you&#39;ll probably find me
            playing cozy and puzzle video games, watching sitcoms (on my 20th
            rewatch of B99), or exploring new tech. I&#39;m always looking for
            opportunities to learn and build new things, so feel free to{" "}
            <Highlight>reach out</Highlight> if you have a project in mind.
          </Text>
        </TextContainer>
        <ElementsContainer>{/* TODO: Add image */}</ElementsContainer>
      </AboutContainer>
    </>
  );
}
