"use client";

import { Button } from "@components/Button";
import type { ProjectTab } from "./utils";
import { TabsContainer, TabButton } from "./styles";

export type { ProjectTab } from "./utils";

const PROJECT_TABS: { label: string; value: ProjectTab }[] = [
  { label: "Websites", value: "website" },
  { label: "Design", value: "design" },
  { label: "Playground", value: "playground" },
];

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
