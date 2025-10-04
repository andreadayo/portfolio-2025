"use client";

import { Divider } from "@components/Divider";
import {
  TechnologiesContainer,
  Box1,
  Box2,
  Box3,
  Circle,
  TextContainer,
  Title,
  Description,
} from "./styles";

export default function About() {
  return (
    <>
      <Divider type="black">02 Technologies</Divider>
      <TechnologiesContainer>
        <Box1>
          <Circle />
          <TextContainer>
            <Title>Design</Title>
            <Description>
              Figma, Photoshop, Premiere Pro, Canva, Spline
            </Description>
          </TextContainer>
        </Box1>
        <Box2>
          {" "}
          <Circle />
          <TextContainer>
            <Title>Frontend</Title>
            <Description>
              JavaScript, TypeScript, React, Next.js, Bootstrap, Tailwind CSS,
              Motion, GSAP
            </Description>
          </TextContainer>
        </Box2>
        <Box3>
          {" "}
          <Circle />
          <TextContainer>
            <Title>Backend</Title>
            <Description>
              Node.js, PHP, SQL, Java, Python, Laravel, Sanity
            </Description>
          </TextContainer>
        </Box3>
      </TechnologiesContainer>
    </>
  );
}
