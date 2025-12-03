"use client";

import Image from "next/image";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { useBreakpoint } from "@hooks/useBreakpoint";
import useViewportWidth from "@hooks/useViewportWidth";
import { urlFor } from "@/src/sanity/lib/image";

import {
  HeroContainer,
  HeroTextContainer,
  HeroSmallTextContainer,
  HeroTextFirst,
  HeroText,
  HeroSmallText,
  HeroImageContainer,
  Highlight,
  Circle,
} from "./styles";

type HomeHeroData = {
  name?: string;
  currentRole?: string;
  location?: string;
  dividerTitle?: string;
  image?: string;
};

export default function Hero({ data }: { data?: HomeHeroData }) {
  const { md } = useBreakpoint();
  const width = useViewportWidth();

  const imageUrl = data?.image
    ? urlFor(data.image).auto("format").fit("max").width(1200).url()
    : null;

  return (
    <>
      <HeroContainer>
        {/* Left */}

        <HeroTextContainer>
          {width < md ? (
            <>
              {/* Mobile */}
              <HeroText>
                I&#39;m <Highlight>{data?.name}</Highlight>
              </HeroText>
              <HeroSmallTextContainer>
                <HeroSmallText>{data?.currentRole}</HeroSmallText>
                <HeroSmallText>based in {data?.location}.</HeroSmallText>
              </HeroSmallTextContainer>
            </>
          ) : (
            <>
              {/* Desktop */}
              <HeroTextFirst>
                <HeroText>Hello</HeroText> <Circle />
                <HeroText>My name is {data?.name}.</HeroText>
              </HeroTextFirst>
              <HeroText>
                I&#39;m a <Highlight>{data?.currentRole}</Highlight>
              </HeroText>
              <HeroText>based in {data?.location}.</HeroText>
            </>
          )}
        </HeroTextContainer>

        {/* Right */}
        <HeroImageContainer>
          <Image
            src={imageUrl ?? "/assets/Hero Image.png"}
            alt={data?.name ? `${data.name} hero image` : "Hero Image"}
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </HeroImageContainer>
      </HeroContainer>

      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText>{data?.currentRole}</MarqueeText>
    </>
  );
}
