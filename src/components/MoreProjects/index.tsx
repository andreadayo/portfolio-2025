"use client";

import { Divider } from "@components/Divider";
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

function ProjectItem() {
  return (
    <GridItem>
      <PreviewImage />
      <TitleRow>
        <TitleBox>
          <Title>Project Title</Title>
        </TitleBox>
        {/* TODO: Display ArrowBox on hover */}
        <ArrowBox>
          <ArrowIcon
            src="/assets/icons/arrow-right.svg"
            alt="Arrow Right"
            width={16}
            height={16}
          />
        </ArrowBox>
      </TitleRow>
    </GridItem>
  );
}

interface MoreProjectsProps {
  count?: number;
}

export default function MoreProjects({ count = 0 }: MoreProjectsProps) {
  return (
    <>
      <Divider type="black">More Works</Divider>
      <GridContainer>
        {/*  Projects */}
        {Array.from({ length: count }).map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </GridContainer>
    </>
  );
}
