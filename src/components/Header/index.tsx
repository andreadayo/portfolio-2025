"use client";

import { useState } from "react";
import Link from "next/link";
import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import {
  HeaderContainer,
  Logo,
  Text,
  HeaderActions,
  LinksContainer,
  LinkItem,
  ContactLinkItem,
  Status,
  Circle,
  Button,
  MenuButton,
  MenuIcon,
} from "./styles";

type NavItem = {
  label?: string;
  path?: string;
};

export default function Header({
  links,
  status,
}: {
  links?: NavItem[];
  status?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = links && links.length > 0 ? links.slice(0, 3) : null;
  const contactLink =
    links && links.length > 0 ? links[links.length - 1] : null;

  return (
    <PaddingWrapper>
      <HeaderContainer>
        {/* Left */}
        <Link href="/">
          <Logo>
            <Text>AD</Text>
          </Logo>
        </Link>

        {/* Right */}
        <HeaderActions open={menuOpen}>
          <LinksContainer>
            {mainLinks &&
              mainLinks.map((item, idx) => (
                <LinkItem key={idx} href={item.path ?? "#"}>
                  <Text>{item.label ?? ""}</Text>
                </LinkItem>
              ))}
          </LinksContainer>
          {status && (
            <Status>
              <Circle />
              <Text>{status}</Text>
            </Status>
          )}
          {contactLink && (
            <ContactLinkItem href={contactLink.path ?? "/contact"}>
              <Button>
                <Text>{contactLink.label ?? "Contact"}</Text>
              </Button>
            </ContactLinkItem>
          )}
        </HeaderActions>

        {/* MenuButton */}
        <MenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <MenuIcon
              src="/assets/Icons/close.svg"
              alt="Menu"
              width={16}
              height={16}
            />
          ) : (
            <MenuIcon
              src="/assets/Icons/menu.svg"
              alt="Menu"
              width={16}
              height={16}
            />
          )}
        </MenuButton>
      </HeaderContainer>
    </PaddingWrapper>
  );
}
