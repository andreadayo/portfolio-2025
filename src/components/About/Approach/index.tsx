"use client";

import BoxStairs from "@components/BoxStairs";

export default function Approach() {
  return (
    <>
      <BoxStairs
        title="02 My Approach"
        boxes={[
          {
            title: "Research & Plan",
            description:
              "I dive into the project and the people using it — the fun part is finding what clicks.",
          },
          {
            title: "Build & Design",
            description:
              "I bring designs to life, focusing on the interactions and details that make a site feel thoughtful and fun.",
          },
          {
            title: "Maintain & Improve",
            description:
              "Launch isn't the finish line. I tweak, refine, and improve so everything keeps feeling right.",
          },
        ]}
      />
    </>
  );
}
