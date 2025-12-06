"use client";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  Icon,
} from "./styles";

type NotFoundData = {
  dividerTitle?: string;
  marqueeText?: string;
  marqueeIcon?: string;
  notFoundIcon?: string;
  header?: string;
  submitButtonLabel?: string;
};

export default function NotFound({ data }: { data: NotFoundData }) {
  const marqueeIconUrl = getImageUrl(data?.marqueeIcon);
  const iconUrl = getImageUrl(data?.notFoundIcon);

  return (
    <>
      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText icon={marqueeIconUrl ?? FALLBACK_IMAGE}>
        {data?.marqueeText}
      </MarqueeText>
      <AboutContainer>
        <ElementsContainer>
          {/* TODO: Add falling elements animation */}
        </ElementsContainer>
        <TextContainer>
          <Icon
            src={iconUrl ?? FALLBACK_IMAGE}
            alt="Not Found Icon"
            width={40}
            height={40}
          />
          <Heading>{data?.header}</Heading>
          <Button type="black" size="auto" href="/">
            {data?.submitButtonLabel}
          </Button>
        </TextContainer>
        <ElementsContainer>
          {/* TODO: Add falling elements animation */}
        </ElementsContainer>
      </AboutContainer>
    </>
  );
}
