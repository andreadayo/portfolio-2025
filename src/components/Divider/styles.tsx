import styled from "styled-components";

import { SubtitleSM } from "@tokens/typography";

export const DividerContainer = styled.div`
  width: 100%;
  height: 2.25rem;
  display: flex;
  align-items: center;
  border-right: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const Title = styled.div<{ type: "black" | "yellow" }>`
  flex-grow: 1;
  height: 100%;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === "black" ? theme.invertedBGColor : theme.accentColor};
  border-left: 0.125rem solid ${({ theme }) => theme.borderColor};
`;

export const Text = styled(SubtitleSM)<{ type: "black" | "yellow" }>`
  color: ${({ theme, type }) =>
    type === "black" ? theme.invertedContentColor : theme.contentColor};
  text-transform: uppercase;

  &::before {
    content: "// "; /* add prefix before text */
    margin-right: 0.25rem;
    color: inherit;
  }
`;

export const Button = styled.button`
  width: max-content;
  height: 100%;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentColor};
  border-left: 0.125rem solid ${({ theme }) => theme.borderColor};
  border: none;
  cursor: pointer;
`;

export const Action = styled(SubtitleSM)`
  color: ${({ theme }) => theme.contentColor};
  text-transform: uppercase;
`;
