import styled from "styled-components";
import { SubtitleXS } from "@tokens/typography";

export const ButtonContainer = styled.button<{
  type?: "black" | "yellow" | "default";
  size?: "fill" | "auto";
}>`
  width: ${({ size }) => (size === "fill" ? "100%" : "max-content")};
  height: 1.75rem;
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
