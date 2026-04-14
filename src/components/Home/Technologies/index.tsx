"use client";

import BoxStairs from "@components/BoxStairs";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";

type HomeTechData = {
  dividerTitle?: string;
  tech?: Array<{
    icon?: string;
    header?: string;
    description?: string;
  }>;
};

export default function Technologies({ data }: { data: HomeTechData }) {
  return (
    <>
      <BoxStairs
        title={data?.dividerTitle || ""}
        boxes={
          data?.tech && data.tech.length > 0
            ? data.tech.map((t) => ({
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
