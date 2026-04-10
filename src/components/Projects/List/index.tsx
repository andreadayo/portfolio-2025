"use client";

import { Button } from "@components/Button";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
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

type ProjectsItemData = {
  isShown?: boolean;
  isFeatured?: boolean;
  type?: string;
  projectTitle?: string;
  projectSlug?: { current: string };
  featuredImage?: SanityImageSource;
  briefDescription?: string;
  date?: string;
  tech?: string[];
  figmaLink?: string;
  githubLink?: string;
  demoLink?: string;
  projectDescription?: string[];
  screenshots?: string[];
};

function ProjectItem({ project }: { project: ProjectsItemData }) {
  const featuredImageUrl = getImageUrl(project.featuredImage) ?? FALLBACK_IMAGE;

  return (
    <ProjectContainer href={`/projects/${project.projectSlug?.current}`}>
      <PreviewImage
        style={{ backgroundImage: `url(${featuredImageUrl})` }}
      ></PreviewImage>
      <InfoContainer>
        <Details>
          <Title>{project.projectTitle}</Title>
          <Description>{project.briefDescription}</Description>
          <TagsContainer>
            {project.tech?.map((techItem, index) => (
              <Tag key={index}>{techItem}</Tag>
            ))}
          </TagsContainer>
        </Details>

        <Button
          icon="/assets/Icons/arrow-right.svg"
          iconSize="small"
          type="default"
          size="auto"
        >
          View Project
        </Button>
      </InfoContainer>
    </ProjectContainer>
  );
}

export default function List({ data = [] }: { data?: ProjectsItemData[] }) {
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
        {data.map((project) => (
          <ProjectItem key={project.projectSlug?.current} project={project} />
        ))}
      </ListContainer>
    </>
  );
}
