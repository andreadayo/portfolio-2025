"use client";

import { Divider } from "@/src/components/Divider";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  InfoContainer,
  Title,
  Description,
  TagsContainer,
  Tag,
  PreviewImage,
} from "./styles";

type ProjectPreviewData = {
  projectTitle?: string;
  briefDescription?: string;
  tech?: string[];
  demoLink?: string;
  type?: string;
  featuredImage?: SanityImageSource;
};

export default function ProjectTitle({ data }: { data?: ProjectPreviewData }) {
  const featuredImageUrl = getImageUrl(data?.featuredImage) ?? FALLBACK_IMAGE;

  return (
    <>
      <InfoContainer>
        <Title>{data?.projectTitle ?? "Untitled Project"}</Title>
        <Description>{data?.briefDescription ?? ""}</Description>
        <TagsContainer>
          {(data?.tech ?? []).map((item, index) => (
            <Tag key={`${item}-${index}`}>{item}</Tag>
          ))}
        </TagsContainer>
      </InfoContainer>
      <Divider
        type="black"
        ctaLabel={data?.demoLink ? "View Live" : undefined}
        href={data?.demoLink}
      >
        {data?.type ?? "Project"}
      </Divider>
      <PreviewImage style={{ backgroundImage: `url(${featuredImageUrl})` }} />
    </>
  );
}
