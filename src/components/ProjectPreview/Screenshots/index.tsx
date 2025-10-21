"use client";

import { Divider } from "@/src/components/Divider";
import { GridContainer, GridItem } from "./styles";

export default function Description() {
  return (
    <>
      <Divider type="yellow">Screenshots</Divider>
      <GridContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <GridItem key={index} />
        ))}
      </GridContainer>
    </>
  );
}
