"use client";

import { Button } from "@components/Button";
import { TabsContainer, TabButton } from "./styles";

export type ProjectTab = "website" | "design" | "playground";

const PROJECT_TABS: { label: string; value: ProjectTab }[] = [
  { label: "Websites", value: "website" },
  { label: "Design", value: "design" },
  { label: "Playground", value: "playground" },
];

export function normalizeProjectType(type?: string): ProjectTab | undefined {
  const normalizedType = type?.trim().toLowerCase();

  if (!normalizedType) {
    return undefined;
  }

  if (normalizedType === "websites") {
    return "website";
  }

  if (
    normalizedType === "website" ||
    normalizedType === "design" ||
    normalizedType === "playground"
  ) {
    return normalizedType;
  }

  return undefined;
}

export default function Tab({
  selectedTab,
  onTabChange,
}: {
  selectedTab: ProjectTab;
  onTabChange: (tab: ProjectTab) => void;
}) {
  return (
    <TabsContainer>
      {PROJECT_TABS.map((tab) => (
        <TabButton
          key={tab.value}
          type="button"
          onClick={() => onTabChange(tab.value)}
          aria-pressed={selectedTab === tab.value}
        >
          <Button
            type={selectedTab === tab.value ? "yellow" : "default"}
            size="fill"
          >
            {tab.label}
          </Button>
        </TabButton>
      ))}
    </TabsContainer>
  );
}
