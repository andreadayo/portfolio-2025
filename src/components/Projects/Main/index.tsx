"use client";

import { useState } from "react";
import Tab, { type ProjectTab } from "@/src/components/Projects/Tab";
import List from "@/src/components/Projects/List";
import MoreProjects from "@/src/components/MoreProjects";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ProjectData = {
  isShown?: boolean;
  isFeatured?: boolean;
  type?: string;
  projectTitle?: string;
  projectSlug?: { current: string };
  featuredImage?: SanityImageSource;
  briefDescription?: string;
  date?: string;
  tech?: string[];
  figmaLink?: string;
  githubLink?: string;
  demoLink?: string;
  projectDescription?: string[];
  screenshots?: string[];
};

export default function Main({
  featuredProjects = [],
  moreProjects = [],
}: {
  featuredProjects?: ProjectData[];
  moreProjects?: ProjectData[];
}) {
  const [selectedTab, setSelectedTab] = useState<ProjectTab>("website");

  return (
    <>
      <Tab selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <List data={featuredProjects} selectedTab={selectedTab} />
      <MoreProjects data={moreProjects} selectedTab={selectedTab} />
    </>
  );
}
