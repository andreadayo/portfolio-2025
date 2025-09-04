"use client";

import { MainPaddingWrapper } from "@components/PaddingWrapper/styles";
import {
  FooterContainer,
  Divider,
  DividerText,
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
  ButtonText,
} from "./styles";

export default function Footer() {
  return (
    <MainPaddingWrapper>
      <FooterContainer>
        {/*  TODO: DIVIDER - Convert to component */}
        <Divider>
          <DividerText>{"// Contact"}</DividerText>
        </Divider>

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
            <Divider>
              <DividerText>{"// Explore"}</DividerText>
            </Divider>
            <LinksContainer>
              <LinkItem>Home</LinkItem>
              <LinkItem>About</LinkItem>
              <LinkItem>Work</LinkItem>
              <LinkItem>Contact</LinkItem>
            </LinksContainer>
          </Column>
          {/*  Get in touch */}
          <Column>
            <Divider>
              <DividerText>{"// Get in touch"}</DividerText>
            </Divider>
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
          {/* TODO: Convert button to component */}
          <Button>
            <ButtonText>Back to Top</ButtonText>
          </Button>
        </CopyrightContainer>
      </FooterContainer>
    </MainPaddingWrapper>
  );
}
