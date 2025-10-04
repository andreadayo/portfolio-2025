"use client";

import { Divider } from "@components/Divider";
import {
  ProjectsContainer,
  ProjectRow,
  Title,
  DetailsRow,
  Detail,
} from "./styles";

export default function Projects() {
  return (
    <>
      <Divider type="black" ctaLabel="View More" href="/projects">
        03 Projects
      </Divider>
      <ProjectsContainer>
        {Array.from({ length: 5 }, (_, index) => (
          <ProjectRow key={index}>
            <Title>Project Title</Title>
            <DetailsRow>
              <Detail>2025</Detail>
              <Detail>Design</Detail>
            </DetailsRow>
          </ProjectRow>
        ))}
      </ProjectsContainer>
    </>
  );
}
