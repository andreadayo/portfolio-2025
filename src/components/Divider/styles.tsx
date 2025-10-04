import styled from "styled-components";

import { SubtitleXS } from "@tokens/typography";

export const DividerContainer = styled.div`
  width: 100%;
  height: 1.75rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: 2.25rem;
  }
`;

export const Title = styled.div<{ type: "black" | "yellow" }>`
  flex-grow: 1;
  height: 100%;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "black" ? theme.invertedBGColor : theme.accentColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    padding: 0.625rem 1rem;
  }
`;

export const Text = styled(SubtitleXS)<{ type: "black" | "yellow" }>`
  color: ${({ theme, type }) =>
    type === "black" ? theme.invertedContentColor : theme.contentColor};
  text-transform: uppercase;

  &::before {
    content: "// ";
    margin-right: 0.25rem;
    color: inherit;
  }
`;

export const Button = styled.button`
  width: max-content;
  height: 1.75rem;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentColor};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  border: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    height: 2.25rem;
  }
`;

export const Action = styled(SubtitleXS)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
