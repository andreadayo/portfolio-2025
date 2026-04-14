"use client";

import Image from "next/image";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { useBreakpoint } from "@hooks/useBreakpoint";
import useViewportWidth from "@hooks/useViewportWidth";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";

import {
  HeroContainer,
  HeroTextContainer,
  HeroSmallTextContainer,
  HeroTextFirst,
  HeroText,
  HeroSmallText,
  HeroImageContainer,
  Highlight,
} from "./styles";

type HomeHeroData = {
  helloIcon?: string;
  name?: string;
  currentRole?: string;
  location?: string;
  dividerTitle?: string;
  dividerIcon?: string;
  heroImage?: string;
};

export default function Hero({ data }: { data?: HomeHeroData }) {
  const { md } = useBreakpoint();
  const width = useViewportWidth();

  const helloIconUrl = getImageUrl(data?.helloIcon);
  const dividerIconUrl = getImageUrl(data?.dividerIcon);
  const heroImageUrl = getImageUrl(data?.heroImage);

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
                <HeroText>Hello</HeroText>
                <Image
                  src={helloIconUrl ?? FALLBACK_IMAGE}
                  alt={"icon"}
                  width={40}
                  height={40}
                />
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
            src={heroImageUrl ?? FALLBACK_IMAGE}
            alt={data?.name ? `${data.name} hero image` : "Hero Image"}
            fill
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </HeroImageContainer>
      </HeroContainer>

      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText icon={dividerIconUrl ?? FALLBACK_IMAGE}>
        {data?.currentRole}
      </MarqueeText>
    </>
  );
}
