"use client";

import { useMemo } from "react";
import { Divider } from "@components/Divider";
import {
  normalizeProjectType,
  type ProjectTab,
} from "@/src/components/Projects/Tab";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  GridContainer,
  GridItem,
  PreviewImage,
  TitleRow,
  TitleBox,
  Title,
  ArrowBox,
  ArrowIcon,
} from "./styles";

type ProjectsMoreData = {
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

function ProjectItem({ project }: { project: ProjectsMoreData }) {
  const featuredImageUrl = getImageUrl(project.featuredImage) ?? FALLBACK_IMAGE;
  return (
    <GridItem>
      <PreviewImage style={{ backgroundImage: `url(${featuredImageUrl})` }} />
      <TitleRow>
        <TitleBox>
          <Title>{project.projectTitle}</Title>
        </TitleBox>
        {/* TODO: Display ArrowBox on hover */}
        <ArrowBox>
          <ArrowIcon
            src="/assets/Icons/arrow-right.svg"
            alt="Arrow Right"
            width={16}
            height={16}
          />
        </ArrowBox>
      </TitleRow>
    </GridItem>
  );
}

export default function MoreProjects({
  data = [],
  selectedTab,
}: {
  data?: ProjectsMoreData[];
  selectedTab: ProjectTab;
}) {
  const filteredProjects = useMemo(
    () =>
      data.filter(
        (project) => normalizeProjectType(project.type) === selectedTab,
      ),
    [data, selectedTab],
  );

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <>
      <Divider type="black">More Works</Divider>
      <GridContainer>
        {/*  Projects */}
        {filteredProjects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </GridContainer>
    </>
  );
}
