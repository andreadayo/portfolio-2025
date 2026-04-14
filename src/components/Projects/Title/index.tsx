"use client";

import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";

type ProjectsTitleData = {
  dividerTitle?: string;
  marqueeText?: string;
  marqueeIcon?: string;
};

export default function Title({ data }: {data: ProjectsTitleData}) {
  const marqueeIconUrl = getImageUrl(data?.marqueeIcon);

  return (
    <>
      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText icon={marqueeIconUrl ?? FALLBACK_IMAGE}>{data?.marqueeText}</MarqueeText>
    </>
  );
}
