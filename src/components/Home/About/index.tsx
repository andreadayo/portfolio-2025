"use client";

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
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
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
