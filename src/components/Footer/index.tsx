"use client";

import Image from "next/image";
import { PaddingWrapper } from "@components/PaddingWrapper/styles";
import { Divider } from "@components/Divider";
import MarqueeText from "@components/MarqueeText";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  FooterContainer,
  ThanksContainer,
  TwoColumns,
  MessageContainer,
  MessageText,
  Column,
  LinksContainer,
  LinkItem,
  LinkText,
  CopyrightContainer,
  CopyrightWrapper,
  CopyrightText,
  Button,
  Label,
} from "./styles";

type FooterData = {
  dividerTitle?: string;
  featuredImage?: string;
  ctaText?: string;
  email?: string;
  emailIcon?: string;
  leftTitle?: string;
  footerLinks?: Array<{
    label?: string;
    path?: string;
  }>;
  rightTitle?: string;
  socialLinks?: Array<{
    label?: string;
    path?: string;
  }>;
  copyright?: string;
};

export default function Footer({ data }: { data?: FooterData }) {
  const featuredImageUrl = getImageUrl(data?.featuredImage);
  const emailIconUrl = getImageUrl(data?.emailIcon);

  return (
    <PaddingWrapper>
      <FooterContainer>
        <Divider type="black">{data?.dividerTitle ?? ""}</Divider>

        {/* Thanks */}
        <ThanksContainer>
          <Image
            src={featuredImageUrl ?? FALLBACK_IMAGE}
            alt="Thanks Image"
            width={1376}
            height={408}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </ThanksContainer>

        {/* Email */}
        <TwoColumns>
          <MessageContainer>
            <MessageText>{data?.ctaText ?? ""}</MessageText>
          </MessageContainer>

          <MarqueeText
            icon={emailIconUrl ?? FALLBACK_IMAGE}
            small={true}
            href={`mailto:${data?.email ?? ""}`}
          >
            {data?.email ?? ""}
          </MarqueeText>
        </TwoColumns>

        {/* More Links */}
        <TwoColumns style={{ zIndex: 15 }}>
          {/*  Explore */}
          <Column>
            <Divider type="yellow">{data?.leftTitle ?? ""}</Divider>
            <LinksContainer>
              {data?.footerLinks && data.footerLinks.length > 0
                ? data.footerLinks.map((link, idx) => (
                    <LinkItem key={idx} href={link.path ?? "#"}>
                      <LinkText>{link.label}</LinkText>
                    </LinkItem>
                  ))
                : ""}
            </LinksContainer>
          </Column>
          {/*  Get in touch */}
          <Column>
            <Divider type="yellow">
              {data?.rightTitle ?? "Get in touch"}
            </Divider>
            <LinksContainer>
              {data?.socialLinks && data.socialLinks.length > 0
                ? data.socialLinks.map((link, idx) => (
                    <LinkItem key={idx} href={link.path ?? "#"}>
                      <LinkText>{link.label}</LinkText>
                    </LinkItem>
                  ))
                : ""}
            </LinksContainer>
          </Column>
        </TwoColumns>

        {/* Copyright */}
        <CopyrightContainer>
          <CopyrightWrapper>
            <CopyrightText>© {data?.copyright ?? ""}</CopyrightText>
          </CopyrightWrapper>
          <Button>
            <Label>Back to Top</Label>
          </Button>
        </CopyrightContainer>
      </FooterContainer>
    </PaddingWrapper>
  );
}
