"use client";

import { Divider } from "@/src/components/Divider";
import {
  InfoContainer,
  Title,
  Description,
  TagsContainer,
  Tag,
  PreviewImage,
} from "./styles";

export default function ProjectTitle() {
  return (
    <>
      <InfoContainer>
        <Title>Project Title</Title>
        <Description>Brief description of the project.</Description>
        <TagsContainer>
          <Tag>Figma</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
        </TagsContainer>
      </InfoContainer>
      <Divider type="black" ctaLabel="View Live" href="#">
        Website
      </Divider>
      <PreviewImage />
    </>
  );
}
