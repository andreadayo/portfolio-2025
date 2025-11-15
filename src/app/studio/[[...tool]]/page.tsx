/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";
// Use the Next.js integration from "next-sanity/studio". There isn't a drop-in "@sanity/..." replacement for NextStudio.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <div style={{ alignSelf: "stretch", width: "100%", minHeight: "100vh" }}>
      <NextStudio config={config} />
    </div>
  );
}
