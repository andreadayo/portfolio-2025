"use client";

import BoxStairs from "@components/BoxStairs";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";

type AboutApproachData = {
  dividerTitle?: string;
  approach?: Array<{
    icon?: string;
    header?: string;
    description?: string;
  }>;
};

export default function Approach({ data }: { data: AboutApproachData }) {
  return (
    <>
      <BoxStairs
        title={data?.dividerTitle || ""}
        boxes={
          data?.approach && data.approach.length > 0
            ? data.approach.map((t) => ({
                icon: getImageUrl(t.icon) || FALLBACK_IMAGE,
                title: t.header ?? "",
                description: t.description ?? "",
              }))
            : []
        }
      />
    </>
  );
}
