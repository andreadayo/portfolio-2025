import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

// Client-safe builder using NEXT_PUBLIC_* env vars. Returns `null` when public
// env vars are missing so callers can fall back to local assets.
export const urlForClient = (source: SanityImageSource) => {
  const pid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!pid || !ds) {
    return null;
  }

  const clientBuilder = createImageUrlBuilder({ projectId: pid, dataset: ds });
  return clientBuilder.image(source);
};
