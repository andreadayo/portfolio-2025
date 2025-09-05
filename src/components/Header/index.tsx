"use client";

import { useState } from "react";
import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import {
  HeaderContainer,
  Logo,
  Text,
  HeaderActions,
  LinksContainer,
  Status,
  Circle,
  Button,
  MenuButton,
} from "./styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PaddingWrapper>
      <HeaderContainer>
        {/* Left */}
        <Logo>
          <Text>AD</Text>
        </Logo>

        {/* Right */}
        <HeaderActions open={menuOpen}>
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
        </HeaderActions>

        {/* MenuButton */}
        <MenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "X" : "☰"}
        </MenuButton>
      </HeaderContainer>
    </PaddingWrapper>
  );
}
