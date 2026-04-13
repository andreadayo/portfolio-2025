"use client";

import { Divider } from "@components/Divider";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  ProjectsContainer,
  ProjectRow,
  Title,
  DetailsRow,
  Detail,
} from "./styles";

type ProjectsItemData = {
  isShown?: boolean;
  isFeatured?: boolean;
  type?: string;
  projectTitle?: string;
  projectSlug?: { current: string };
  featuredImage?: SanityImageSource;
  date?: string;
};

export default function Projects({ data }: { data?: ProjectsItemData[] }) {
  const featuredProjects = data ?? [];

  return (
    <>
      <Divider type="black" ctaLabel="View More" href="/projects">
        03 Projects
      </Divider>
      <ProjectsContainer>
        {featuredProjects.map((project, index) => (
          <ProjectRow
            key={
              project.projectSlug?.current ?? `${project.projectTitle}-${index}`
            }
            href={
              project.projectSlug?.current
                ? `/projects/${project.projectSlug.current}`
                : "/projects"
            }
          >
            <Title>{project.projectTitle}</Title>
            <DetailsRow>
              <Detail>{project.date?.slice(-4) ?? ""}</Detail>
              <Detail>{project.type}</Detail>
            </DetailsRow>
          </ProjectRow>
        ))}
      </ProjectsContainer>
    </>
  );
}
