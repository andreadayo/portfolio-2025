"use client";

import { Button } from "@components/Button";
import {
  ListContainer,
  TabsContainer,
  ProjectContainer,
  PreviewImage,
  InfoContainer,
  Details,
  Title,
  Description,
  TagsContainer,
  Tag,
} from "./styles";

function ProjectItem() {
  return (
    <ProjectContainer>
      <PreviewImage></PreviewImage>
      <InfoContainer>
        <Details>
          <Title>Project Title</Title>
          <Description>Brief description of the project.</Description>
          <TagsContainer>
            <Tag>Figma</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </TagsContainer>
        </Details>

        <Button
          icon="/assets/Icons/arrow-right.svg"
          iconSize="small"
          type="default"
          size="auto"
          href="#"
        >
          View Project
        </Button>
      </InfoContainer>
    </ProjectContainer>
  );
}

export default function List() {
  return (
    <>
      <ListContainer>
        <TabsContainer>
          <Button type="yellow" size="fill" href="#">
            Websites
          </Button>
          <Button type="default" size="fill" href="#">
            Design
          </Button>
          <Button type="default" size="fill" href="#">
            Playground
          </Button>
        </TabsContainer>

        {/*  Projects */}
        {Array.from({ length: 3 }).map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </ListContainer>
    </>
  );
}
