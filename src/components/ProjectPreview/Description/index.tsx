"use client";

import { Divider } from "@/src/components/Divider";
import RichText from "@/src/components/RichText";
import type { PortableTextBlock } from "sanity";
import { TextContainer, Text } from "./styles";

type ProjectPreviewData = {
  projectDescription?: PortableTextBlock[];
};

export default function Description({ data }: { data?: ProjectPreviewData }) {
  const descriptionBlocks = data?.projectDescription ?? [];

  return (
    <>
      <Divider type="yellow">Description</Divider>
      <TextContainer>
        <Text>
          {descriptionBlocks.length > 0 ? (
            <RichText value={descriptionBlocks} />
          ) : (
            "No description available."
          )}
        </Text>
      </TextContainer>
    </>
  );
}
