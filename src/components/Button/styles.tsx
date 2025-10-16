import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { SubtitleXS } from "@tokens/typography";

export const ButtonContainer = styled(Link)<{
  size?: "fill" | "auto";
}>`
  width: ${({ size }) => (size === "fill" ? "100%" : "max-content")};
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.button<{
  type?: "black" | "yellow" | "default";
}>`
  flex: 1;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === "yellow"
      ? theme.accentColor
      : type === "black"
      ? theme.invertedBGColor
      : theme.bgColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  border: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: 2.25rem;
  }
`;

export const Text = styled(SubtitleXS)<{
  type?: "black" | "yellow" | "default";
}>`
  color: ${({ theme, type }) =>
    type === "black" ? theme.invertedContentColor : theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const IconContainer = styled.div`
  width: auto;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.invertedBGColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
`;

export const Icon = styled(Image)<{ iconsize: "small" | "medium" | "large" }>`
  width: ${({ iconsize }) =>
    iconsize === "small"
      ? "1rem"
      : iconsize === "medium"
      ? "1.5rem"
      : "2.25rem"};
  height: ${({ iconsize }) =>
    iconsize === "small"
      ? "1rem"
      : iconsize === "medium"
      ? "1.5rem"
      : "2.25rem"};
`;
