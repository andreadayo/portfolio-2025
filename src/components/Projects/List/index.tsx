"use client";

import { useMemo } from "react";
import { Button } from "@components/Button";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  normalizeProjectType,
  type ProjectTab,
} from "@/src/components/Projects/Tab/utils";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  ListContainer,
  ProjectContainer,
  PreviewImage,
  InfoContainer,
  Details,
  Title,
  Description,
  TagsContainer,
  Tag,
  EmptyState,
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
  const projectHref = project.projectSlug?.current
    ? `/projects/${project.projectSlug.current}`
    : "/projects";

  return (
    <ProjectContainer href={projectHref}>
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

export default function List({
  data = [],
  selectedTab,
}: {
  data?: ProjectsItemData[];
  selectedTab: ProjectTab;
}) {
  const selectedTabLabel =
    selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1);

  const filteredProjects = useMemo(
    () =>
      data.filter(
        (project) => normalizeProjectType(project.type) === selectedTab,
      ),
    [data, selectedTab],
  );

  return (
    <>
      <ListContainer>
        {/*  Projects */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectItem
              key={
                project.projectSlug?.current ??
                `${project.projectTitle}-${index}`
              }
              project={project}
            />
          ))
        ) : (
          <EmptyState>{selectedTabLabel} projects coming soon.</EmptyState>
        )}
      </ListContainer>
    </>
  );
}
