"use client";

import Image from "next/image";
import { PortableTextBlock } from "sanity";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import RichText from "@components/RichText";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Text,
} from "./styles";

type AboutIntroData = {
  dividerTitle?: string;
  marqueeText?: string;
  marqueeIcon?: string;
  introDividerTitle?: string;
  header?: PortableTextBlock[];
  description?: PortableTextBlock[];
  featuredImage?: string;
};

export default function Introduction({ data }: { data: AboutIntroData }) {
  const marqueeIconUrl = getImageUrl(data?.marqueeIcon);
  const featuredImageUrl = getImageUrl(data?.featuredImage);

  return (
    <>
      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText icon={marqueeIconUrl ?? FALLBACK_IMAGE}>
        {data?.marqueeText}
      </MarqueeText>
      <Divider type="black">{data?.introDividerTitle}</Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            <RichText value={data?.header ?? []} />
          </Heading>
          <Text>
            <RichText value={data?.description ?? []} />
          </Text>
        </TextContainer>
        <ElementsContainer>
          <Image
            src={featuredImageUrl ?? FALLBACK_IMAGE}
            alt="featured image"
            width={700}
            height={400}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ElementsContainer>
      </AboutContainer>
    </>
  );
}
