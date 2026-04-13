"use client";

import { useMemo, useState } from "react";
import { Button } from "@components/Button";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  ListContainer,
  TabsContainer,
  TabButton,
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

type ProjectTab = "website" | "design" | "playground";

const PROJECT_TABS: { label: string; value: ProjectTab }[] = [
  { label: "Websites", value: "website" },
  { label: "Design", value: "design" },
  { label: "Playground", value: "playground" },
];

function normalizeProjectType(type?: string): ProjectTab | undefined {
  const normalizedType = type?.trim().toLowerCase();

  if (!normalizedType) {
    return undefined;
  }

  if (normalizedType === "websites") {
    return "website";
  }

  if (
    normalizedType === "website" ||
    normalizedType === "design" ||
    normalizedType === "playground"
  ) {
    return normalizedType;
  }

  return undefined;
}

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

export default function List({ data = [] }: { data?: ProjectsItemData[] }) {
  const [selectedTab, setSelectedTab] = useState<ProjectTab>("website");
  const selectedTabLabel =
    selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1);

  const filteredProjects = useMemo(
    () =>
      data.filter(
        (project) =>
          project.isFeatured &&
          normalizeProjectType(project.type) === selectedTab,
      ),
    [data, selectedTab],
  );

  return (
    <>
      <ListContainer>
        <TabsContainer>
          {PROJECT_TABS.map((tab) => (
            <TabButton
              key={tab.value}
              type="button"
              onClick={() => setSelectedTab(tab.value)}
              aria-pressed={selectedTab === tab.value}
            >
              <Button
                type={selectedTab === tab.value ? "yellow" : "default"}
                size="fill"
              >
                {tab.label}
              </Button>
            </TabButton>
          ))}
        </TabsContainer>

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
