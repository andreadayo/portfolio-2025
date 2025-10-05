"use client";

import BoxStairs from "@components/BoxStairs";

export default function Technologies() {
  return (
    <>
      <BoxStairs
        title="02 My Technologies"
        boxes={[
          {
            title: "Design",
            description: "Figma, Photoshop, Premiere Pro, Canva, Spline",
          },
          {
            title: "Frontend",
            description:
              "JavaScript, TypeScript, React, Next.js, Bootstrap, Tailwind CSS, Motion, GSAP",
          },
          {
            title: "Backend",
            description: "Node.js, PHP, SQL, Java, Python, Laravel, Sanity",
          },
        ]}
      />
    </>
  );
}
