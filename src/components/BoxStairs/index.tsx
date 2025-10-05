"use client";

import { Divider } from "@components/Divider";
import {
  StairsContainer,
  Box,
  Circle,
  TextContainer,
  Title,
  Description,
} from "./styles";

interface TechnologyBox {
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
            <Circle />
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
