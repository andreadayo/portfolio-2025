"use client";

import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import { Divider } from "@components/Divider";
import {
  FooterContainer,
  ThanksContainer,
  TwoColumns,
  MessageContainer,
  MessageText,
  EmailLink,
  Address,
  Icon,
  Column,
  LinksContainer,
  LinkItem,
  CopyrightContainer,
  CopyrightWrapper,
  CopyrightText,
  Button,
  Label,
} from "./styles";

export default function Footer() {
  return (
    <PaddingWrapper>
      <FooterContainer>
        <Divider type="black">Contact</Divider>

        {/* Thanks */}
        <ThanksContainer>Thanks</ThanksContainer>

        {/* Email */}
        <TwoColumns>
          <MessageContainer>
            <MessageText>
              Working with teams and brands who want to do things differently.
              Let&apos;s build something new together.
            </MessageText>
          </MessageContainer>
          {/*  TODO: SCROLLING TEXT - Convert to component */}
          <EmailLink>
            <Address>andrealouisedayo@gmail.com</Address>
            <Icon />
            <Address>andrealouisedayo@gmail.com</Address>
          </EmailLink>
        </TwoColumns>

        {/* More Links */}
        <TwoColumns>
          {/*  Explore */}
          <Column>
            <Divider type="yellow">Explore</Divider>
            <LinksContainer>
              <LinkItem>Home</LinkItem>
              <LinkItem>About</LinkItem>
              <LinkItem>Work</LinkItem>
              <LinkItem>Contact</LinkItem>
            </LinksContainer>
          </Column>
          {/*  Get in touch */}
          <Column>
            <Divider type="yellow">Get in touch</Divider>
            <LinksContainer>
              <LinkItem>LinkedIn</LinkItem>
              <LinkItem>Github</LinkItem>
              <LinkItem>Instagram</LinkItem>
            </LinksContainer>
          </Column>
        </TwoColumns>

        {/* Copyright */}
        <CopyrightContainer>
          <CopyrightWrapper>
            <CopyrightText>© 2025 All rights reserved.</CopyrightText>
          </CopyrightWrapper>
          <Button>
            <Label>Back to Top</Label>
          </Button>
        </CopyrightContainer>
      </FooterContainer>
    </PaddingWrapper>
  );
}
