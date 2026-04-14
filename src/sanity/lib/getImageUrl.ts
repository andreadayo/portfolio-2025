import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "./image";

type GetImageUrlOptions = {
  width?: number;
  height?: number;
};

export function getImageUrl(
  source?: SanityImageSource | null,
  options: GetImageUrlOptions = { width: 1200 }
): string | null {
  if (!source) return null;

  let builder = urlFor(source).auto("format").fit("max");

  if (options.width) builder = builder.width(options.width);
  if (options.height) builder = builder.height(options.height);

  return builder.url();
}
