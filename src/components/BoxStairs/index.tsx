"use client";

import type { StaticImageData } from "next/image";
import { Divider } from "@components/Divider";
import {
  StairsContainer,
  Box,
  Icon,
  TextContainer,
  Title,
  Description,
} from "./styles";

interface TechnologyBox {
  icon?: string | StaticImageData | null;
  title: string;
  description: string;
}

interface BoxStairsProps {
  title: string;
  boxes: TechnologyBox[];
}

export default function BoxStairs({ title, boxes }: BoxStairsProps) {
  return (
    <>
      <Divider type="black">{title}</Divider>
      <StairsContainer>
        {boxes.map((box, index) => (
          <Box key={index} className={`box-${index + 1}`}>
            {box.icon && (
              <Icon src={box.icon} alt={box.title} width={60} height={60} />
            )}
            <TextContainer>
              <Title>{box.title}</Title>
              <Description>{box.description}</Description>
            </TextContainer>
          </Box>
        ))}
      </StairsContainer>
    </>
  );
}
