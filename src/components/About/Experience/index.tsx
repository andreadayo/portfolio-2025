"use client";

import { Divider } from "@components/Divider";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Highlight,
  ItemContainer,
  CompanyContainer,
  LogoContainer,
  InfoContainer,
  CompanyName,
  Position,
  Duration,
} from "./styles";

function ListItem() {
  return (
    <>
      <ItemContainer>
        {/* TODO: Add image */}
        <LogoContainer />
        <CompanyContainer>
          <InfoContainer>
            <CompanyName>Freelance Web Designer and Developer</CompanyName>
            <Position>Fiverr</Position>
          </InfoContainer>
          <Duration>Nov 2023 - Present</Duration>
        </CompanyContainer>
      </ItemContainer>
    </>
  );
}

export default function Experience() {
  return (
    <>
      {/* Experience Section */}
      <Divider
        type="black"
        ctaLabel="View LinkedIn"
        href="https://www.linkedin.com/in/andreadayo"
      >
        03 Experience
      </Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            See what I&#39;ve been <Highlight>working on</Highlight>
          </Heading>
        </TextContainer>
        <ElementsContainer>
          {Array.from({ length: 6 }).map((_, index) => (
            <ListItem key={index} />
          ))}
        </ElementsContainer>
      </AboutContainer>

      {/* Education Section */}
      <Divider type="black">04 Education</Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            See what I&#39;ve <Highlight>studied</Highlight>
          </Heading>
        </TextContainer>
        <ElementsContainer>
          {Array.from({ length: 2 }).map((_, index) => (
            <ListItem key={index} />
          ))}
        </ElementsContainer>
      </AboutContainer>
    </>
  );
}
