"use client";

import { Divider } from "@/src/components/Divider";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { GridContainer, GridItem } from "./styles";

type ProjectPreviewData = {
  screenshots?: SanityImageSource[];
};

export default function Screenshots({ data }: { data?: ProjectPreviewData }) {
  const screenshots = data?.screenshots ?? [];

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <>
      <Divider type="yellow">Screenshots</Divider>
      <GridContainer>
        {screenshots.map((screenshot, index) => (
          <GridItem
            key={index}
            style={{
              backgroundImage: `url(${getImageUrl(screenshot)})`,
            }}
          />
        ))}
      </GridContainer>
    </>
  );
}
