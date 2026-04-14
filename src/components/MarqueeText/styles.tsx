import styled from "styled-components";
import Image from "next/image";
import { TitleXXGigantic } from "@tokens/typography";

export const Container = styled.div<{ $small?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ $small }) => ($small ? "100%" : "auto")};
  padding: ${({ $small }) => ($small ? "1.5rem 0" : "0.5rem 0")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $small }) => ($small ? "1rem" : "1.5rem")};
  outline: 0.063rem solid ${({ theme }) => theme.borderColor};
  white-space: nowrap;
  overflow: hidden;
  background: ${({ theme }) => theme.bgColor};
  cursor: ${({ $small }) => ($small ? "pointer" : "default")};
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 0;
    pointer-events: none;
    transition: background 0.3s ease;
  }

  &:hover::before {
    background: ${({ $small, theme }) => $small && theme.color.gradientYellow};
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    gap: ${({ $small }) => ($small ? "1.5rem" : "2rem")};
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    gap: 2rem;
  }
`;

export const Text = styled(TitleXXGigantic)<{ $small?: boolean }>`
  color: ${({ theme }) => theme.contentColor};
  text-transform: ${({ $small }) => ($small ? "lowercase" : "uppercase")};
  font-size: ${({ $small, theme }) =>
    $small ? theme.fontSize.xl : theme.fontSize.xxgigantic};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    font-size: ${({ $small, theme }) =>
      $small ? theme.fontSize.gigantic : theme.fontSize.xxxgigantic};
  }
`;

export const Icon = styled(Image)<{ $small?: boolean }>`
  flex-shrink: 0;
  width: ${({ $small }) => ($small ? "1.5rem" : "2rem")};
  height: ${({ $small }) => ($small ? "1.5rem" : "2rem")};

  @media only screen and (min-width: ${({ theme }) => theme?.breakpoint?.md}) {
    width: ${({ $small }) => ($small ? "2rem" : "3rem")};
    height: ${({ $small }) => ($small ? "2rem" : "3rem")};
  }
`;
