"use client";

import { PortableTextBlock } from "sanity";
import { Divider } from "@components/Divider";
import RichText from "@components/RichText";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Text,
} from "./styles";

type HomeAboutData = {
  dividerTitle?: string;
  dividerButton?: {
    label?: string;
    path?: string;
  };
  header?: string;
  description?: PortableTextBlock[];
};

export default function About({ data }: { data?: HomeAboutData }) {
  return (
    <>
      <Divider
        type="black"
        ctaLabel={data?.dividerButton?.label}
        href={data?.dividerButton?.path}
      >
        {data?.dividerTitle}
      </Divider>
      <AboutContainer>
        <ElementsContainer>
          {/* TODO: Add falling elements animation */}
        </ElementsContainer>
        <TextContainer>
          <Heading>{data?.header}</Heading>
          <Text>
            <RichText value={data?.description ?? []} />
          </Text>
        </TextContainer>
      </AboutContainer>
    </>
  );
}
