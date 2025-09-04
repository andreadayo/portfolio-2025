"use client";

import { SidePaddingWrapper } from "@components/PaddingWrapper/styles";
import {
  HeaderContainer,
  Logo,
  Text,
  RightContainer,
  LinksContainer,
  Status,
  Circle,
  Button,
} from "./styles";

export default function Header() {
  return (
    <SidePaddingWrapper>
      <HeaderContainer>
        {/* Left */}
        <Logo>
          <Text>AD</Text>
        </Logo>

        {/* Right */}
        <RightContainer>
          <LinksContainer>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Projects</Text>
          </LinksContainer>
          <Status>
            <Circle />
            <Text>Available for Work</Text>
          </Status>
          <Button>
            <Text>Contact</Text>
          </Button>
        </RightContainer>
      </HeaderContainer>
    </SidePaddingWrapper>
  );
}
